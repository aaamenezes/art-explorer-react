import { InputProps } from './types';

export default function Input({ placeholder, value, onChange }: InputProps) {
  return (
    <input
      value={value}
      onChange={event => onChange(event.target.value)}
      type="text"
      className="px-4 focus:outline-0"
      placeholder={placeholder}
    />
  );
}
