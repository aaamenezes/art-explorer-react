import Wrapper from '@/components/container/Wrapper';
import HomeTemplate from '@/components/template/Home';
import { ParsedUrlQuery } from 'querystring';
import { Suspense } from 'react';

interface HomePageProps {
  searchParams?: Promise<Record<string, ParsedUrlQuery['slug']>>;
}

export default async function Home({ searchParams }: HomePageProps) {
  const params = await searchParams;

  return (
    <Wrapper as="main">
      <div className="my-8">
        <h1 className="text-3xl font-bold mb-4">
          Veja as obras do Metropolitan Museum of Art
        </h1>
      </div>
      <Suspense fallback={<p>Carregando...</p>}>
        <HomeTemplate searchParams={params} />
      </Suspense>
    </Wrapper>
  );
}
