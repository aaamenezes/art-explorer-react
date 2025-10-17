import { PropsWithChildren } from 'react';

export default function Figure({
  children,
  figcaption,
}: PropsWithChildren<{ figcaption: string }>) {
  return (
    <figure className="flex flex-col gap-1">
      {children}
      <figcaption className="p-2">{figcaption}</figcaption>
    </figure>
  );
}
