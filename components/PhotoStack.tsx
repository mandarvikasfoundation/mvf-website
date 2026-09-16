'use client';

import { useState, useRef } from 'react';

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
 *
 * By default (crop=true) photos are cropped to a uniform frame, matching
 * the original Home/Mandar's Pride flagship stack look.
 *
 * Pass crop={false} to instead let each photo keep its own natural aspect
 * ratio (no cropping at all) — width is fixed via photoWidth, height
 * follows automatically per photo.
 */
export default function PhotoStack({
  photos,
  photoWidth = 130,
  crop = true,
}: {
  photos: StackPhoto[];
  photoWidth?: number;
  crop?: boolean;
}) {
  const [order, setOrder] = useState(photos.map((_, i) => i));

  // When not cropping, photos can have very different natural heights.
  // Rather than assuming a worst-case portrait ratio (which left a big
  // empty gap for stacks made entirely of landscape photos), measure each
  // photo's actual aspect ratio as it loads and size the box to fit the
  // tallest one actually present in this stack.
  const ratios = useRef<Record<string, number>>({});
  const [tallestRatio, setTallestRatio] = useState(0);

  function handleImageLoad(src: string, e: React.SyntheticEvent<HTMLImageElement>) {
    if (crop) return;
    const img = e.currentTarget;
    if (!img.naturalWidth || !img.naturalHeight) return;
    ratios.current[src] = img.naturalHeight / img.naturalWidth;
    const max = Math.max(...Object.values(ratios.current));
    if (max > tallestRatio) setTallestRatio(max);
  }

  function cycleToBack(photoIndex: number) {
    const slotDepth = order.indexOf(photoIndex);
    if (slotDepth !== 0) return; // only the front photo is clickable
    setOrder((prev) => [...prev.slice(1), prev[0]]);
  }

  // Fallback (before images finish loading) assumes a modest 4:3 landscape
  // photo so there's no oversized flash of empty space; once real images
  // load, the box settles to their actual tallest ratio plus padding/caption.
  const fallbackRatio = 0.85;
  const effectiveRatio = crop ? 1.06 : tallestRatio || fallbackRatio;
  const captionAllowance = crop ? 0 : 34; // room for padding + optional caption line
  const containerHeight = crop
    ? photoWidth * 1.35
    : photoWidth * effectiveRatio + captionAllowance;

  return (
    <div style={{ position: 'relative', width: photoWidth + 20, height: containerHeight }}>
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
              width: photoWidth,
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
              loading="lazy"
              onLoad={(e) => handleImageLoad(photo.src, e)}
              style={
                crop
                  ? { width: '100%', height: photoWidth * 1.06, objectFit: 'cover', display: 'block' }
                  : { width: '100%', height: 'auto', display: 'block' }
              }
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
