import { LinkProps } from './types';

export default function Link({
  children,
  href,
  external = false,
  className,
}: LinkProps) {
  return (
    <a
      href={href}
      target={external ? '_blank' : '_self'}
      rel={external ? 'noopener noreferrer' : undefined}
      className={className}
    >
      {children}
    </a>
  );
}
