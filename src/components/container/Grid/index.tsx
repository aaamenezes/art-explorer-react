import { GridProps } from './types';

export default function Grid({ children }: GridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {children}
    </div>
  );
}
