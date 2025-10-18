import { ImageProps } from 'next/image';

export default function Image({ src, alt }: ImageProps) {
  return <img src={src} alt={alt} className="block max-w-full" />;
}
