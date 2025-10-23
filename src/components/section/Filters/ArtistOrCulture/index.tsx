import Checkbox from '@/components/base/Checkbox';
import { useArtworkStore } from '@/store/artworks';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useState } from 'react';

export default function ArtistOrCulture() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [checked, setChecked] = useState(false);

  const { loadAllArtWorksIDsFromApi, loadArtWorksByPage } = useArtworkStore();

  const handleChange = useCallback(() => {
    const currentChecked = !checked;
    setChecked(currentChecked);

    const params = new URLSearchParams(searchParams.toString());
    const paramQ = params.get('q');
    if (!paramQ) return;

    if (currentChecked) {
      params.set('artistOrCulture', 'true');
    } else {
      params.delete('artistOrCulture');
    }
    router.push(`?${params.toString()}`);

    loadAllArtWorksIDsFromApi({
      keywordSearch: paramQ,
      artistOrCulture: currentChecked ? true : undefined,
    }).then(() => {
      loadArtWorksByPage(1);
    });
  }, [
    checked,
    loadAllArtWorksIDsFromApi,
    loadArtWorksByPage,
    router,
    searchParams,
  ]);

  return (
    <>
      <h3 className="text-xl font-bold mb-2">Tipo:</h3>
      <Checkbox
        label="Buscar apenas por artista/cultura"
        name="artistOrCulture"
        checked={checked}
        onChange={handleChange}
        toggle={handleChange}
      />
    </>
  );
}
