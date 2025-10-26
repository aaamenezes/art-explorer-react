import Image from '@/components/base/Image';
import Link from '@/components/base/Link';
import Wrapper from '@/components/container/Wrapper';
import { buildArtworkAltText } from '@/lib/buildArtworkAltText';
import { getArtworkByID } from '@/lib/metApi';
import { ExternalLink } from 'lucide-react';
import { ArtworkPageProps } from './types';
import ErrorIllustration from '@/components/block/ErrorIllustration';

export default async function Artwork({ params }: ArtworkPageProps) {
  const { id } = await params;
  const artwork = await getArtworkByID(id);

  return (
    <Wrapper as="main">
      {!artwork ? (
        <>
          <h2 className="text-3xl font-bold my-8">
            Ops... obra de arte não encontrada :/
          </h2>
          <p>
            Use a caixa de busca no topo da tela para fazer uma nova pesquisa.
          </p>
          <div className="flex justify-center">
            <ErrorIllustration />
          </div>
        </>
      ) : (
        <>
          <h1 className="text-4xl font-bold my-8">{artwork.title}</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-full">
            <Image
              src={artwork.primaryImage}
              alt={buildArtworkAltText(artwork)}
            />
            <div className="flex flex-col gap-4">
              <div>
                <h2 className="text-3xl font-bold">
                  {artwork.artistDisplayName}
                </h2>
                <p className="text-sm text-gray-400">
                  data: {artwork.objectDate}
                </p>
              </div>
              <p>
                A técnica utilizada pelo artista foi{' '}
                <strong>{artwork.medium}</strong>.
              </p>
              <p>Departamento: {artwork.department}</p>
              <p>
                Gostou dessa obra? Então acesse suas informações no site
                oficial:
              </p>
              <p className="">
                <Link
                  href={artwork.objectURL}
                  className="flex justify-center items-center gap-2 px-4 py-2 rounded-md underline text-blue-600 dark:text-blue-300 bg-neutral-100 dark:bg-neutral-800"
                  external
                >
                  <span>{artwork.title}</span>{' '}
                  <ExternalLink className="size-5" />
                </Link>
              </p>
            </div>
          </div>
        </>
      )}
    </Wrapper>
  );
}
