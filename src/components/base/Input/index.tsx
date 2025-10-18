import { InputProps } from './types';

export default function Input({ placeholder }: InputProps) {
  return (
    <input
      type="text"
      className="px-4 py-2 focus:outline-0"
      placeholder={placeholder}
    />
  );
}
