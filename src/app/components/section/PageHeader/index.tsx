import Logo from '../../base/Logo';
import { Star } from 'lucide-react';

export default function PageHeader() {
  return (
    <header className="flex justify-between items-center container mx-auto p-4 bg-amber-600">
      <Logo />
      <span>busca</span>
      <button>
        <Star /> <span>favoritar</span>
      </button>
    </header>
  );
}
