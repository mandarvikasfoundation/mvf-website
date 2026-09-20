'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';

type NewsPost = {
  id: string;
  slug: string;
  post_date: string;
  title_en: string;
  title_hi: string;
  teaser_en: string;
  teaser_hi: string;
  body_en: string;
  body_hi: string;
  thumb_url: string | null;
  image_urls: string[];
  tags: string[];
  featured: boolean;
  published: boolean;
};

const AVAILABLE_TAGS = ["Mandar's Pride", 'Community', 'Events', 'Other'];

const emptyDraft = (): Omit<NewsPost, 'id'> => ({
  slug: '',
  post_date: new Date().toISOString().slice(0, 10),
  title_en: '',
  title_hi: '',
  teaser_en: '',
  teaser_hi: '',
  body_en: '',
  body_hi: '',
  thumb_url: null,
  image_urls: [],
  tags: [],
  featured: false,
  published: true,
});

export default function NewsAdminPage() {
  const [posts, setPosts] = useState<NewsPost[] | null>(null);
  const [editing, setEditing] = useState<NewsPost | Omit<NewsPost, 'id'> | null>(null);
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const supabase = createClient();
    const { data, error: fetchError } = await supabase
      .from('news_posts')
      .select('*')
      .order('post_date', { ascending: false });
    if (fetchError) {
      setError(fetchError.message);
      return;
    }
    setPosts(data as NewsPost[]);
  }

  async function handleUpload(file: File) {
    setUploading(true);
    setError(null);
    const supabase = createClient();
    const ext = file.name.split('.').pop();
    const path = `news/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
    const { error: uploadError } = await supabase.storage.from('site-images').upload(path, file);
    setUploading(false);
    if (uploadError) {
      setError(uploadError.message);
      return;
    }
    const { data } = supabase.storage.from('site-images').getPublicUrl(path);
    setEditing((prev) => (prev ? { ...prev, thumb_url: data.publicUrl } : prev));
  }

  async function handleUploadExtraImages(files: FileList) {
    setUploading(true);
    setError(null);
    const supabase = createClient();
    const newUrls: string[] = [];

    for (const file of Array.from(files)) {
      const ext = file.name.split('.').pop();
      const path = `news/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
      const { error: uploadError } = await supabase.storage.from('site-images').upload(path, file);
      if (uploadError) {
        setError(uploadError.message);
        continue;
      }
      const { data } = supabase.storage.from('site-images').getPublicUrl(path);
      newUrls.push(data.publicUrl);
    }

    setUploading(false);
    setEditing((prev) => (prev ? { ...prev, image_urls: [...prev.image_urls, ...newUrls] } : prev));
  }

  function handleRemoveExtraImage(url: string) {
    setEditing((prev) => (prev ? { ...prev, image_urls: prev.image_urls.filter((u) => u !== url) } : prev));
  }

  async function handleSave() {
    if (!editing) return;
    if (!editing.slug.trim() || !editing.title_en.trim()) {
      setError('Slug and English title are required.');
      return;
    }
    setSaving(true);
    setError(null);
    const supabase = createClient();

    const payload = { ...editing };
    const isNew = !('id' in editing);

    const { error: saveError } = isNew
      ? await supabase.from('news_posts').insert(payload)
      : await supabase.from('news_posts').update(payload).eq('id', (editing as NewsPost).id);

    setSaving(false);
    if (saveError) {
      setError(saveError.message);
      return;
    }
    setEditing(null);
    load();
  }

  async function handleDelete(id: string) {
    if (!confirm('Delete this post? This cannot be undone.')) return;
    const supabase = createClient();
    await supabase.from('news_posts').delete().eq('id', id);
    load();
  }

  function toggleTag(tag: string) {
    setEditing((prev) => {
      if (!prev) return prev;
      const has = prev.tags.includes(tag);
      return { ...prev, tags: has ? prev.tags.filter((t) => t !== tag) : [...prev.tags, tag] };
    });
  }

  if (editing) {
    return (
      <div>
        <h1 className="section-heading" style={{ fontSize: 28, margin: "4px 0 20px" }}>
          {'id' in editing ? 'Edit Post' : 'New Post'}
        </h1>

        {error && <div style={{ fontSize: 13, color: '#b91c1c', marginBottom: 16 }}>{error}</div>}

        <div style={{ background: 'var(--card-bg)', borderRadius: 8, padding: 24, display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 640 }}>
          <Field label="Slug (used in the URL, e.g. independence-day-2026)">
            <input
              value={editing.slug}
              onChange={(e) => setEditing({ ...editing, slug: e.target.value.trim().toLowerCase().replace(/\s+/g, '-') })}
              style={inputStyle}
            />
          </Field>

          <Field label="Date">
            <input
              type="date"
              value={editing.post_date}
              onChange={(e) => setEditing({ ...editing, post_date: e.target.value })}
              style={inputStyle}
            />
          </Field>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <Field label="Title (English)">
              <input value={editing.title_en} onChange={(e) => setEditing({ ...editing, title_en: e.target.value })} style={inputStyle} />
            </Field>
            <Field label="Title (Hindi)">
              <input value={editing.title_hi} onChange={(e) => setEditing({ ...editing, title_hi: e.target.value })} style={inputStyle} />
            </Field>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <Field label="Teaser (English), shown in the list">
              <textarea rows={2} value={editing.teaser_en} onChange={(e) => setEditing({ ...editing, teaser_en: e.target.value })} style={inputStyle} />
            </Field>
            <Field label="Teaser (Hindi)">
              <textarea rows={2} value={editing.teaser_hi} onChange={(e) => setEditing({ ...editing, teaser_hi: e.target.value })} style={inputStyle} />
            </Field>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <Field label="Full story (English): blank line = new paragraph">
              <textarea rows={6} value={editing.body_en} onChange={(e) => setEditing({ ...editing, body_en: e.target.value })} style={inputStyle} />
            </Field>
            <Field label="Full story (Hindi)">
              <textarea rows={6} value={editing.body_hi} onChange={(e) => setEditing({ ...editing, body_hi: e.target.value })} style={inputStyle} />
            </Field>
          </div>

          <Field label="Thumbnail image, used in the News list and featured card">
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              {editing.thumb_url && (
                <img src={editing.thumb_url} alt="" style={{ width: 60, height: 60, objectFit: 'cover', borderRadius: 4 }} />
              )}
              <input
                type="file"
                accept="image/*"
                onChange={(e) => e.target.files?.[0] && handleUpload(e.target.files[0])}
                disabled={uploading}
              />
              {uploading && <span style={{ fontSize: 12, color: 'var(--ink-muted)' }}>Uploading\u2026</span>}
            </div>
          </Field>

          <Field label="Additional images, shown within the full post below the thumbnail">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 10 }}>
              {editing.image_urls.map((url) => (
                <div key={url} style={{ position: 'relative' }}>
                  <img src={url} alt="" style={{ width: 70, height: 70, objectFit: 'cover', borderRadius: 4 }} />
                  <button
                    type="button"
                    onClick={() => handleRemoveExtraImage(url)}
                    aria-label="Remove image"
                    style={{
                      position: 'absolute',
                      top: -6,
                      right: -6,
                      width: 20,
                      height: 20,
                      borderRadius: '50%',
                      background: '#b91c1c',
                      color: 'white',
                      border: '2px solid var(--card-bg)',
                      fontSize: 11,
                      lineHeight: '16px',
                      cursor: 'pointer',
                      padding: 0,
                    }}
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={(e) => e.target.files && e.target.files.length > 0 && handleUploadExtraImages(e.target.files)}
              disabled={uploading}
            />
          </Field>

          <Field label="Tags">
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {AVAILABLE_TAGS.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => toggleTag(tag)}
                  style={{
                    fontSize: 12,
                    padding: '5px 12px',
                    borderRadius: 12,
                    border: editing.tags.includes(tag) ? '1px solid var(--navy-700)' : '1px solid var(--paper-line)',
                    background: editing.tags.includes(tag) ? 'var(--navy-700)' : 'var(--card-bg)',
                    color: editing.tags.includes(tag) ? 'white' : 'var(--ink)',
                    cursor: 'pointer',
                  }}
                >
                  {tag}
                </button>
              ))}
            </div>
          </Field>

          <div style={{ display: 'flex', gap: 20 }}>
            <label style={{ fontSize: 13, display: 'flex', alignItems: 'center', gap: 6 }}>
              <input type="checkbox" checked={editing.featured} onChange={(e) => setEditing({ ...editing, featured: e.target.checked })} />
              Featured (shown large at the top of the News page)
            </label>
            <label style={{ fontSize: 13, display: 'flex', alignItems: 'center', gap: 6 }}>
              <input type="checkbox" checked={editing.published} onChange={(e) => setEditing({ ...editing, published: e.target.checked })} />
              Published (visible on the live site)
            </label>
          </div>

          <div style={{ display: 'flex', gap: 10, marginTop: 4 }}>
            <button onClick={handleSave} disabled={saving} style={primaryBtnStyle}>
              {saving ? 'Saving\u2026' : 'Save'}
            </button>
            <button onClick={() => { setEditing(null); setError(null); }} style={secondaryBtnStyle}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
        <div>
          <h1 className="section-heading" style={{ fontSize: 28, margin: "4px 0 4px" }}>News & Updates</h1>
          <p style={{ fontSize: 13.5, color: 'var(--ink-muted)' }}>Posts shown on the public News page.</p>
        </div>
        <button onClick={() => setEditing(emptyDraft())} style={primaryBtnStyle}>
          + New Post
        </button>
      </div>

      {error && <div style={{ fontSize: 13, color: '#b91c1c', marginBottom: 16 }}>{error}</div>}

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {posts?.map((post) => (
          <div key={post.id} style={{ background: 'var(--card-bg)', borderRadius: 8, padding: '14px 18px', display: 'flex', gap: 14, alignItems: 'center' }}>
            {post.thumb_url && (
              <img src={post.thumb_url} alt="" style={{ width: 48, height: 48, objectFit: 'cover', borderRadius: 4, flexShrink: 0 }} />
            )}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 13.5, fontWeight: 700, color: 'var(--navy-700)' }}>
                {post.title_en}
                {!post.published && (
                  <span style={{ marginLeft: 8, fontSize: 10, fontWeight: 700, color: 'var(--label-grey)', border: '1px solid var(--paper-line)', borderRadius: 8, padding: '1px 7px' }}>
                    DRAFT
                  </span>
                )}
                {post.featured && (
                  <span style={{ marginLeft: 6, fontSize: 10, fontWeight: 700, color: 'var(--saffron-600)', border: '1px solid var(--saffron-300)', borderRadius: 8, padding: '1px 7px' }}>
                    FEATURED
                  </span>
                )}
              </div>
              <div style={{ fontSize: 11.5, color: 'var(--label-grey)', marginTop: 2 }}>
                {post.post_date} &middot; /{post.slug}
              </div>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <button onClick={() => setEditing(post)} style={actionBtnStyle}>Edit</button>
              <button onClick={() => handleDelete(post.id)} style={{ ...actionBtnStyle, color: '#b91c1c' }}>Delete</button>
            </div>
          </div>
        ))}
        {posts && posts.length === 0 && <div style={{ fontSize: 13, color: 'var(--ink-muted)' }}>No posts yet.</div>}
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--ink)', marginBottom: 5 }}>{label}</label>
      {children}
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '8px 10px',
  fontSize: 13.5,
  border: '1px solid var(--paper-line)',
  borderRadius: 5,
  boxSizing: 'border-box',
  fontFamily: 'inherit',
};

const primaryBtnStyle: React.CSSProperties = {
  padding: '9px 18px',
  fontSize: 13,
  fontWeight: 700,
  color: 'white',
  background: 'var(--navy-700)',
  border: 'none',
  borderRadius: 5,
  cursor: 'pointer',
};

const secondaryBtnStyle: React.CSSProperties = {
  padding: '9px 18px',
  fontSize: 13,
  fontWeight: 700,
  color: 'var(--ink)',
  background: 'var(--card-bg)',
  border: '1px solid var(--paper-line)',
  borderRadius: 5,
  cursor: 'pointer',
};

const actionBtnStyle: React.CSSProperties = {
  fontSize: 11.5,
  padding: '5px 11px',
  border: '1px solid var(--paper-line)',
  borderRadius: 5,
  background: 'var(--card-bg)',
  color: 'var(--ink)',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
};
