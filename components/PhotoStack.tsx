'use client';

import { useState } from 'react';

export type StackPhoto = {
  src: string;
  caption?: string; // Captions are optional per photo
};

const SLOT_STYLES = [
  { transform: 'rotate(-6deg) translate(-6px, 2px) scale(1)', zIndex: 3 },
  { transform: 'rotate(3deg) translate(14px, 10px) scale(0.96)', zIndex: 2 },
  { transform: 'rotate(-3deg) translate(4px, 18px) scale(0.92)', zIndex: 1 },
];

/**
 * A stack of photos with white polaroid-style borders. Clicking the front
 * photo slides it to the back of the pile, cycling through the set.
 * The exact photo count/dimensions here are illustrative — swap in real
 * photos of any aspect ratio; the component doesn't need exactly 3.
 */
export default function PhotoStack({ photos }: { photos: StackPhoto[] }) {
  const [order, setOrder] = useState(photos.map((_, i) => i));

  function cycleToBack(photoIndex: number) {
    const slotDepth = order.indexOf(photoIndex);
    if (slotDepth !== 0) return; // only the front photo is clickable
    setOrder((prev) => [...prev.slice(1), prev[0]]);
  }

  return (
    <div style={{ position: 'relative', width: 150, height: 176 }}>
      {photos.map((photo, photoIndex) => {
        const slotDepth = order.indexOf(photoIndex);
        const style = SLOT_STYLES[slotDepth] ?? SLOT_STYLES[SLOT_STYLES.length - 1];
        return (
          <div
            key={photo.src}
            onClick={() => cycleToBack(photoIndex)}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: 130,
              padding: '7px 7px 18px',
              background: 'white',
              boxShadow: '0 6px 16px rgba(15,42,74,0.28)',
              cursor: slotDepth === 0 ? 'pointer' : 'default',
              transition: 'transform 0.55s cubic-bezier(.3,.7,.2,1)',
              transform: style.transform,
              zIndex: style.zIndex,
            }}
          >
            <img
              src={photo.src}
              alt={photo.caption ?? ''}
              style={{ width: '100%', height: 138, objectFit: 'cover' }}
            />
            {photo.caption && (
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10,
                  color: 'var(--ink)',
                  textAlign: 'center',
                  marginTop: 4,
                }}
              >
                {photo.caption}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
