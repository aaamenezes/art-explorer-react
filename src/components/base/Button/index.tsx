import { LucideProps } from 'lucide-react';
import {
  ForwardRefExoticComponent,
  PropsWithChildren,
  RefAttributes,
} from 'react';

export default function Button({
  onClick,
  children,
  type = 'button',
  className = '',
  StartIcon,
}: PropsWithChildren<{
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  StartIcon?: ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
  >;
}>) {
  return (
    <button
      className={`flex items-center gap-2 p-2 rounded-md outline-none cursor-pointer ${className}`}
      type={type}
      onClick={onClick}
    >
      {StartIcon && <StartIcon />}
      {children}
    </button>
  );
}
