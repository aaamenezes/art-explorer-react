import { FigureProps } from './types';

export default function Figure({ children, figcaption }: FigureProps) {
  return (
    <figure className="flex flex-col gap-1">
      {children}
      <figcaption className="p-2">{figcaption}</figcaption>
    </figure>
  );
}
