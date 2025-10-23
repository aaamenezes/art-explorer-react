import { ButtonProps } from './types';

export default function Button({
  children,
  variant = 'primary',
  onClick,
  type = 'button',
  className = '',
  StartIcon,
  tabIndex,
  transparent = false,
}: ButtonProps) {
  const variantsClasses = {
    primary: `${
      transparent ? 'bg-transparent' : 'bg-neutral-800 dark:bg-neutral-100'
    } text-neutral-100 dark:text-neutral-800 hover:bg-neutral-700 dark:hover:bg-neutral-200 transition-colors`,
    secondary: `${
      transparent ? 'bg-transparent' : 'bg-neutral-100 dark:bg-neutral-800'
    } text-neutral-800 dark:text-neutral-100 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors`,
  };
  return (
    <button
      className={`flex items-center gap-2 py-2 px-4 rounded-md outline-none cursor-pointer ${variantsClasses[variant]} ${className}`}
      type={type}
      onClick={onClick}
      tabIndex={tabIndex}
    >
      {StartIcon && <StartIcon />}
      {children}
    </button>
  );
}
