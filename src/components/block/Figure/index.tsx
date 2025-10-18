import { FigureProps } from './types';

export default function Figure({ children }: FigureProps) {
  return (
    <figure className="flex flex-col gap-1">
      {children}
      <figcaption className="px-4 py-2 group-hover:underline">
        figcaption
      </figcaption>
    </figure>
  );
}
