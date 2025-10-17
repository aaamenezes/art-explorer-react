import { PropsWithChildren } from 'react';

export default function Wrapper({
  children,
  as: Tag = 'div',
}: PropsWithChildren<{
  as?: keyof HTMLElementTagNameMap;
}>) {
  return <Tag className="container mx-auto p-4">{children}</Tag>;
}
