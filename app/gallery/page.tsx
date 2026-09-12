'use client';

import { useState } from 'react';

const TAGS = ["All", "Mandar's Pride", 'Learning Centre', 'Horticulture', 'Skill Development', 'Events', 'Other'];

type Photo = {
  src: string;
  tags: string[];
  caption?: string;
};

const PHOTOS: Photo[] = [
  { src: '/images/campus-gate.jpg', tags: ["Mandar's Pride"], caption: 'The campus gate' },
  { src: '/images/mandars-pride/gate-evening.jpg', tags: ["Mandar's Pride"] },
  { src: '/images/mandars-pride/admissions-event.jpg', tags: ["Mandar's Pride"], caption: 'Admissions day' },
  { src: '/images/mandars-pride/classroom.jpg', tags: ["Mandar's Pride"] },
  { src: '/images/our-work/learning-1.jpg', tags: ['Learning Centre'] },
  { src: '/images/our-work/learning-2.jpg', tags: ['Learning Centre'], caption: 'At the gate' },
  { src: '/images/our-work/learning-3.jpg', tags: ['Learning Centre'] },
  { src: '/images/our-work/horticulture-1.jpg', tags: ['Horticulture'], caption: 'Marigolds in bloom' },
  { src: '/images/our-work/horticulture-2.jpg', tags: ['Horticulture'] },
  { src: '/images/our-work/horticulture-3.jpg', tags: ['Horticulture'] },
  { src: '/images/our-work/skill-1.jpg', tags: ['Skill Development'] },
  { src: '/images/our-work/skill-2.jpg', tags: ['Skill Development'], caption: 'Tailoring class' },
  { src: '/images/our-work/skill-3.jpg', tags: ['Skill Development'] },
  { src: '/images/news/independence-day-2026-flag-hoisting.png', tags: ['Events'], caption: 'Independence Day, 2026' },
];

export default function GalleryPage() {
  const [selected, setSelected] = useState<string[]>(['All']);
  const [lightbox, setLightbox] = useState<Photo | null>(null);

  function toggleTag(tag: string) {
    if (tag === 'All') {
      setSelected(['All']);
      return;
    }
    setSelected((prev) => {
      const withoutAll = prev.filter((t) => t !== 'All');
      const next = withoutAll.includes(tag)
        ? withoutAll.filter((t) => t !== tag)
        : [...withoutAll, tag];
      return next.length === 0 ? ['All'] : next;
    });
  }

  const visiblePhotos = selected.includes('All')
    ? PHOTOS
    : PHOTOS.filter((p) => p.tags.some((t) => selected.includes(t)));

  return (
    <div className="container" style={{ padding: '30px 0 50px' }}>
      <div className="eyebrow">Home / Gallery</div>
      <h1 className="section-heading" style={{ fontSize: 42, margin: '8px 0 0' }}>
        Gallery
      </h1>
      <p style={{ fontSize: 14, color: 'var(--ink-muted)', marginTop: 2, whiteSpace: 'nowrap' }}>
        A look at life at Mandar Vikas Foundation, our campus, our programs, and our community.
      </p>

      <div style={{ display: 'flex', gap: 8, marginTop: 18, marginBottom: 26, flexWrap: 'wrap' }}>
        {TAGS.map((tag) => {
          const active = selected.includes(tag);
          return (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 12,
                padding: '6px 14px',
                borderRadius: 14,
                border: active ? '1px solid var(--navy-700)' : '1px solid var(--rule)',
                background: active ? 'var(--navy-700)' : 'transparent',
                color: active ? 'white' : 'var(--ink-muted)',
                cursor: 'pointer',
              }}
            >
              {tag}
            </button>
          );
        })}
      </div>

      {visiblePhotos.length === 0 ? (
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--label-grey)' }}>
          No photos under this tag yet.
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 12 }}>
          {visiblePhotos.map((photo) => (
            <button
              key={photo.src}
              onClick={() => setLightbox(photo)}
              style={{
                position: 'relative',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                borderRadius: 4,
                overflow: 'hidden',
                aspectRatio: '1',
                background: 'var(--card-bg)',
              }}
            >
              <img
                src={photo.src}
                alt={photo.caption ?? ''}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              {photo.caption && (
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'rgba(15,42,74,0.75)',
                    color: 'white',
                    fontFamily: 'var(--font-mono)',
                    fontSize: 10,
                    padding: '6px 8px',
                    textAlign: 'left',
                  }}
                >
                  {photo.caption}
                </div>
              )}
            </button>
          ))}
        </div>
      )}

      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(15,42,74,0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 100,
            padding: 24,
            cursor: 'zoom-out',
          }}
        >
          <div style={{ maxWidth: '90vw', maxHeight: '85vh', textAlign: 'center' }}>
            <img
              src={lightbox.src}
              alt={lightbox.caption ?? ''}
              style={{ maxWidth: '100%', maxHeight: '75vh', borderRadius: 4, display: 'block', margin: '0 auto' }}
            />
            {lightbox.caption && (
              <div style={{ color: 'white', fontFamily: 'var(--font-mono)', fontSize: 12, marginTop: 12 }}>
                {lightbox.caption}
              </div>
            )}
            <div style={{ color: 'var(--sky-300)', fontFamily: 'var(--font-mono)', fontSize: 10, marginTop: 8 }}>
              tap anywhere to close
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
