export default function Image({ src, alt }: { src: string; alt: string }) {
  return <img src={src} alt={alt} className="block max-w-full" />;
}
