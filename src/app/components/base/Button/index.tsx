import { LucideProps } from 'lucide-react';
import {
  ForwardRefExoticComponent,
  PropsWithChildren,
  RefAttributes,
} from 'react';

export default function Button({
  children,
  StartIcon,
}: PropsWithChildren<{
  StartIcon?: ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
  >;
}>) {
  return (
    <button className="flex items-center gap-2 px-4 py-2 rounded-md cursor-pointer">
      {StartIcon && <StartIcon />}
      {children}
    </button>
  );
}
