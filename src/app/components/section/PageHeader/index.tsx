import Link from '../../base/Link';
import Logo from '../../base/Logo';
import { Star } from 'lucide-react';
import Search from '../../block/Search';

export default function PageHeader() {
  return (
    <header className="flex justify-between items-center container mx-auto p-4">
      <Link href="/">
        <Logo />
      </Link>
      <Search />
      <Link href="/favorites">
        <Star />
        Favoritos
      </Link>
    </header>
  );
}
