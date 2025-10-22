import { ButtonProps } from './types';

export default function Button({
  children,
  variant = 'primary',
  onClick,
  type = 'button',
  StartIcon,
}: ButtonProps) {
  const variantsClasses = {
    primary:
      'bg-neutral-800 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-800 hover:bg-neutral-700 dark:hover:bg-neutral-200 transition-colors',
    secondary:
      'bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors',
  };
  return (
    <button
      className={`flex items-center gap-2 py-2 px-4 rounded-md outline-none cursor-pointer ${variantsClasses[variant]}`}
      type={type}
      onClick={onClick}
    >
      {StartIcon && <StartIcon />}
      {children}
    </button>
  );
}
