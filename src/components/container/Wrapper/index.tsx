import { WrapperProps } from './types';

export default function Wrapper({ children, as: Tag = 'div' }: WrapperProps) {
  return <Tag className="container mx-auto p-4">{children}</Tag>;
}
