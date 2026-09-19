'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';

type Photo = {
  id: string;
  src_url: string;
  caption_en: string | null;
  caption_hi: string | null;
  tags: string[];
  sort_order: number;
};

const AVAILABLE_TAGS = ["Mandar's Pride", 'Learning Centre', 'Horticulture', 'Skill Development', 'Events', 'Other'];

export default function GalleryAdminPage() {
  const [photos, setPhotos] = useState<Photo[] | null>(null);
  const [editing, setEditing] = useState<Photo | null>(null);
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const supabase = createClient();
    const { data, error: fetchError } = await supabase
      .from('gallery_photos')
      .select('*')
      .order('sort_order', { ascending: true });
    if (fetchError) {
      setError(fetchError.message);
      return;
    }
    setPhotos(data as Photo[]);
  }

  async function handleUpload(files: FileList) {
    setUploading(true);
    setError(null);
    const supabase = createClient();
    const maxSort = photos?.reduce((m, p) => Math.max(m, p.sort_order), 0) ?? 0;

    let i = 0;
    for (const file of Array.from(files)) {
      i += 1;
      const ext = file.name.split('.').pop();
      const path = `gallery/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
      const { error: uploadError } = await supabase.storage.from('site-images').upload(path, file);
      if (uploadError) {
        setError(uploadError.message);
        continue;
      }
      const { data } = supabase.storage.from('site-images').getPublicUrl(path);
      await supabase.from('gallery_photos').insert({
        src_url: data.publicUrl,
        tags: [],
        sort_order: maxSort + i,
      });
    }
    setUploading(false);
    load();
  }

  async function handleSaveEdit() {
    if (!editing) return;
    setSaving(true);
    const supabase = createClient();
    const { error: saveError } = await supabase
      .from('gallery_photos')
      .update({
        caption_en: editing.caption_en,
        caption_hi: editing.caption_hi,
        tags: editing.tags,
      })
      .eq('id', editing.id);
    setSaving(false);
    if (saveError) {
      setError(saveError.message);
      return;
    }
    setEditing(null);
    load();
  }

  async function handleDelete(id: string) {
    if (!confirm('Delete this photo? This cannot be undone.')) return;
    const supabase = createClient();
    await supabase.from('gallery_photos').delete().eq('id', id);
    load();
  }

  function toggleTag(tag: string) {
    setEditing((prev) => {
      if (!prev) return prev;
      const has = prev.tags.includes(tag);
      return { ...prev, tags: has ? prev.tags.filter((t) => t !== tag) : [...prev.tags, tag] };
    });
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20, flexWrap: 'wrap', gap: 12 }}>
        <div>
          <h1 style={{ fontSize: 22, fontWeight: 700, color: '#1b2430', marginBottom: 4 }}>Gallery</h1>
          <p style={{ fontSize: 13.5, color: '#6b7280' }}>
            Photos shown on the public Gallery page and Mandar's Pride's Gallery tab (tag a photo "Mandar's Pride" for it to appear there too).
          </p>
        </div>
        <label style={{ ...primaryBtnStyle, display: 'inline-block' }}>
          {uploading ? 'Uploading\u2026' : '+ Upload Photos'}
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => e.target.files && e.target.files.length > 0 && handleUpload(e.target.files)}
            disabled={uploading}
            style={{ display: 'none' }}
          />
        </label>
      </div>

      {error && <div style={{ fontSize: 13, color: '#b91c1c', marginBottom: 16 }}>{error}</div>}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 14 }}>
        {photos?.map((photo) => (
          <div key={photo.id} style={{ background: 'white', borderRadius: 8, overflow: 'hidden' }}>
            <img src={photo.src_url} alt={photo.caption_en ?? ''} style={{ width: '100%', height: 120, objectFit: 'cover', display: 'block' }} />
            <div style={{ padding: 10 }}>
              <div style={{ fontSize: 11.5, color: '#374151', minHeight: 16, marginBottom: 6 }}>
                {photo.caption_en || <span style={{ color: '#9ca3af' }}>No caption</span>}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginBottom: 8 }}>
                {photo.tags.map((tag) => (
                  <span key={tag} style={{ fontSize: 9.5, background: '#f3f4f6', color: '#6b7280', padding: '2px 6px', borderRadius: 6 }}>
                    {tag}
                  </span>
                ))}
              </div>
              <div style={{ display: 'flex', gap: 6 }}>
                <button onClick={() => setEditing(photo)} style={{ ...actionBtnStyle, flex: 1 }}>Edit</button>
                <button onClick={() => handleDelete(photo.id)} style={{ ...actionBtnStyle, color: '#b91c1c' }}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {photos && photos.length === 0 && <div style={{ fontSize: 13, color: '#6b7280' }}>No photos yet.</div>}

      {editing && (
        <div
          onClick={() => setEditing(null)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20, zIndex: 100 }}
        >
          <div onClick={(e) => e.stopPropagation()} style={{ background: 'white', borderRadius: 8, padding: 24, width: 400, maxWidth: '100%' }}>
            <img src={editing.src_url} alt="" style={{ width: '100%', height: 160, objectFit: 'cover', borderRadius: 6, marginBottom: 16 }} />

            <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#374151', marginBottom: 5 }}>Caption (English)</label>
            <input
              value={editing.caption_en ?? ''}
              onChange={(e) => setEditing({ ...editing, caption_en: e.target.value })}
              style={{ ...inputStyle, marginBottom: 12 }}
            />

            <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#374151', marginBottom: 5 }}>Caption (Hindi)</label>
            <input
              value={editing.caption_hi ?? ''}
              onChange={(e) => setEditing({ ...editing, caption_hi: e.target.value })}
              style={{ ...inputStyle, marginBottom: 12 }}
            />

            <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#374151', marginBottom: 6 }}>Tags</label>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 20 }}>
              {AVAILABLE_TAGS.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => toggleTag(tag)}
                  style={{
                    fontSize: 11.5,
                    padding: '5px 10px',
                    borderRadius: 12,
                    border: editing.tags.includes(tag) ? '1px solid #1b2430' : '1px solid #d1d5db',
                    background: editing.tags.includes(tag) ? '#1b2430' : 'white',
                    color: editing.tags.includes(tag) ? 'white' : '#374151',
                    cursor: 'pointer',
                  }}
                >
                  {tag}
                </button>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 10 }}>
              <button onClick={handleSaveEdit} disabled={saving} style={primaryBtnStyle}>
                {saving ? 'Saving\u2026' : 'Save'}
              </button>
              <button onClick={() => setEditing(null)} style={secondaryBtnStyle}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '8px 10px',
  fontSize: 13.5,
  border: '1px solid #d1d5db',
  borderRadius: 5,
  boxSizing: 'border-box',
  fontFamily: 'inherit',
};

const primaryBtnStyle: React.CSSProperties = {
  padding: '9px 18px',
  fontSize: 13,
  fontWeight: 700,
  color: 'white',
  background: '#1b2430',
  border: 'none',
  borderRadius: 5,
  cursor: 'pointer',
};

const secondaryBtnStyle: React.CSSProperties = {
  padding: '9px 18px',
  fontSize: 13,
  fontWeight: 700,
  color: '#374151',
  background: 'white',
  border: '1px solid #d1d5db',
  borderRadius: 5,
  cursor: 'pointer',
};

const actionBtnStyle: React.CSSProperties = {
  fontSize: 11.5,
  padding: '5px 11px',
  border: '1px solid #d1d5db',
  borderRadius: 5,
  background: 'white',
  color: '#374151',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
};
