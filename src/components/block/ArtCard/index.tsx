import Image from '@/components/base/Image';
import Figure from '../Figure';

export default function ArtCard() {
  return (
    <article className="flex flex-col gap-1 rounded-md overflow-hidden bg-neutral-100">
      <Figure figcaption="lorem ipsum dolor sit amet consectetur adipisicing">
        {/* <Image src={ArtCard.primaryImageSmall} alt="Artista" /> */}
        <Image src="https://github.com/aaamenezes.png" alt="Artista" />
      </Figure>
      <div className="flex justify-between gap-1 px-2 pb-2 text-sm text-gray-400 dark:text-gray-500">
        <p>artistDisplayName</p>
        <p>objectDate</p>
      </div>
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
