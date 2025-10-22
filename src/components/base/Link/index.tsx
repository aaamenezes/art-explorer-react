import NextLink from 'next/link';
import { LinkProps } from './types';

export default function Link({
  children,
  href,
  external = false,
  className = '',
  onClick = () => {},
}: LinkProps) {
  return (
    <NextLink
      href={href}
      target={external ? '_blank' : '_self'}
      rel={external ? 'noopener noreferrer' : undefined}
      className={className}
      onClick={onClick}
    >
      {children}
    </NextLink>
  );
}
