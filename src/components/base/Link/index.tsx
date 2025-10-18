import { LinkProps } from './types';

export default function Link({ children, href, className }: LinkProps) {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}
