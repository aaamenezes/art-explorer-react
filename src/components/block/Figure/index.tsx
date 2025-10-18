import Link from '@/components/base/Link';
import { FigureProps } from './types';

export default function Figure({
  children,
  figcaption,
  figcaptionUrl,
}: FigureProps) {
  return (
    <figure className="flex flex-col gap-1">
      {children}
      <figcaption className="p-2">
        {figcaptionUrl ? (
          <Link href={figcaptionUrl} className="group-hover:underline">
            {figcaption}
          </Link>
        ) : (
          figcaption
        )}
      </figcaption>
    </figure>
  );
}
