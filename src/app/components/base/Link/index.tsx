import { PropsWithChildren } from 'react';

export default function Link({
  children,
  href,
}: PropsWithChildren<{
  href: string;
}>) {
  return (
    <a href={href} className="flex items-center gap-2 px-4 py-2">
      {children}
    </a>
  );
}
