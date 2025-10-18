import { ImageProps } from './types';

export default function Image({ src, alt, className }: ImageProps) {
  return (
    <img src={src} alt={alt} className={`block max-w-full ${className}`} />
  );
}
