import React from 'react';
import { ImageAsset } from '../assets/image';

interface Props {
  image: ImageAsset;
  alt: string;
  /** Rendered width hint for the browser's srcset picker. Keep it honest — an
   *  over-generous value makes it download a larger file than it needs. */
  sizes?: string;
  /** Skip lazy-loading and hint high priority. Use only for the LCP image. */
  priority?: boolean;
  className?: string;
  /** Merged over the blur-placeholder background styles. */
  style?: React.CSSProperties;
}

/**
 * Responsive <picture> wrapper around a generated ImageAsset.
 *
 * The blur placeholder is painted as the element's own background, so it shows
 * through until the real pixels decode and then sits harmlessly behind them —
 * no extra DOM node and no load-state re-render.
 *
 * <picture> uses display:contents so it never interferes with the flex/grid
 * layout the <img> was previously a direct child of.
 */
const Img: React.FC<Props> = ({ image, alt, sizes = '100vw', priority = false, className, style }) => (
  <picture style={{ display: 'contents' }}>
    <source type="image/avif" srcSet={image.avif} sizes={sizes} />
    <source type="image/webp" srcSet={image.webp} sizes={sizes} />
    <img
      src={image.src}
      alt={alt}
      width={image.width}
      height={image.height}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding={priority ? 'sync' : 'async'}
      className={className}
      style={{
        backgroundImage: `url("${image.lqip}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        ...style,
      }}
    />
  </picture>
);

export default Img;
