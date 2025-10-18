import Button from '@/components/base/Button';
import Image from '@/components/base/Image';
import Link from '@/components/base/Link';
import Figure from '@/components/block/Figure';
import { Star } from 'lucide-react';

export default function ArtCard() {
  const currentArtIsFavorited = false;

  return (
    <article className="relative rounded-md overflow-hidden bg-neutral-100 dark:bg-neutral-900 group">
      <Link href="#" className="flex flex-col gap-1 ">
        <Figure figcaption="lorem ipsum dolor sit amet consectetur adipisicing">
          {/* <Image src={ArtCard.primaryImageSmall} alt="Artista" /> */}
          <div className="overflow-hidden">
            <Image
              src="https://github.com/aaamenezes.png"
              alt="Artista"
              className="group-hover:scale-120 duration-2000"
            />
          </div>
        </Figure>
        <div className="flex justify-between gap-1 px-2 pb-2 text-sm text-gray-400 dark:text-gray-500">
          <p>artistDisplayName</p>
          <p>objectDate</p>
        </div>
      </Link>
      <Button className="absolute top-1 right-1 bg-white/40 hover:bg-white dark:bg-black/40 dark:hover:bg-black transition">
        <Star className={currentArtIsFavorited ? 'fill-current' : ''} />
      </Button>
    </article>
  );
}

// https://www.metmuseum.org/art/collection/search/488660
// https://collectionapi.metmuseum.org/api/collection/v1/iiif/488660/1013844/restricted

/**
 * imagem
 * título
 * artista
 * data
 * técnica
 * departamento
 * link para o site oficial
 */
