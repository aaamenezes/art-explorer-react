import Link from '../../base/Link';
import Logo from '../../base/Logo';
import { Star } from 'lucide-react';

export default function PageHeader() {
  return (
    <header className="flex justify-between items-center container mx-auto p-4 bg-amber-600">
      <Link href="/">
        <Logo />
      </Link>
      <span>busca</span>
      <Link href="/favorites">
        <Star />
        Favoritos
      </Link>
    </header>
  );
}
