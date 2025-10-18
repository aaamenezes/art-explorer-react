import { LinkProps } from './types';

export default function Link({ children, href }: LinkProps) {
  return (
    <a href={href} className="flex items-center gap-2 px-4 py-2">
      {children}
    </a>
  );
}
