import Checkbox from '@/components/base/Checkbox';
import { useState } from 'react';

export default function ArtistOrCulture() {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <h3 className="text-xl font-bold mb-2">Tipo:</h3>
      <Checkbox
        label="Buscar apenas por artista/cultura"
        name="artistOrCulture"
        checked={checked}
        onChange={setChecked}
      />
    </>
  );
}
