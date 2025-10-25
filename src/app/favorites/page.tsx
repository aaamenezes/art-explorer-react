import Wrapper from '@/components/container/Wrapper';
import FavoritesGrid from '@/components/section/FavoritesGrid';
import ImageResizer from '@/components/section/ImageResizer/inde';

export default function Favorites() {
  return (
    <Wrapper as="main">
      <ImageResizer />
      <h1 className="text-2xl font-bold my-8">Veja suas obras favoritas!</h1>
      <FavoritesGrid />
    </Wrapper>
  );
}
