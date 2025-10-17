import { LucideProps } from 'lucide-react';
import {
  ForwardRefExoticComponent,
  PropsWithChildren,
  RefAttributes,
} from 'react';

export default function Button({
  onClick,
  type = 'button',
  children,
  StartIcon,
}: PropsWithChildren<{
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  StartIcon?: ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
  >;
}>) {
  return (
    <button
      className="flex items-center gap-2 px-4 py-2 rounded-md cursor-pointer"
      type={type}
      onClick={onClick}
    >
      {StartIcon && <StartIcon />}
      {children}
    </button>
  );
}
