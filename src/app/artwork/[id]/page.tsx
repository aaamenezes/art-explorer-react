import { buildArtWorkAltText } from '@/lib/buildArtWorkAltText';
import { getArtWorkById } from '@/lib/metApi';
import Image from '@/components/base/Image';
import Link from '@/components/base/Link';
import Wrapper from '@/components/container/Wrapper';
import { ExternalLink } from 'lucide-react';
import { ArtWorkPageProps } from './types';

export default async function ArtWork({ params }: ArtWorkPageProps) {
  const { id } = await params;
  const artWork = await getArtWorkById(id);

  return (
    <Wrapper as="main">
      <h1 className="text-4xl font-bold my-8">{artWork.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-full">
        <Image src={artWork.primaryImage} alt={buildArtWorkAltText(artWork)} />
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="text-3xl font-bold">{artWork.artistDisplayName}</h2>
            <p className="text-sm text-gray-400">data: {artWork.objectDate}</p>
          </div>
          <p>
            A técnica utilizada pelo artista foi{' '}
            <strong>{artWork.medium}</strong>.
          </p>
          <p>Departamento: {artWork.department}</p>
          <p>
            Gostou dessa obra? Então acesse suas informações no site oficial:
          </p>
          <p className="">
            <Link
              href={artWork.objectURL}
              className="flex justify-center items-center gap-2 px-4 py-2 rounded-md underline text-blue-600 dark:text-blue-300 bg-neutral-100 dark:bg-neutral-800"
              external
            >
              <span>{artWork.title}</span> <ExternalLink className="size-5" />
            </Link>
          </p>
        </div>
      </div>
    </Wrapper>
  );
}
