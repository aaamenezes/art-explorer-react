import { ButtonProps } from './types';

export default function Button({
  children,
  onClick,
  type = 'button',
  className = '',
  StartIcon,
}: ButtonProps) {
  return (
    <button
      className={`flex items-center gap-2 py-2 px-4 rounded-md outline-none cursor-pointer ${className}`}
      type={type}
      onClick={onClick}
    >
      {StartIcon && <StartIcon />}
      {children}
    </button>
  );
}
