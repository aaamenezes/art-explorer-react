import Button from '@/components/base/Button';
import { useImagesStore } from '@/store/images';
import { Square, RectangleVertical, RectangleHorizontal } from 'lucide-react';

export default function ImageResizer() {
  const { setProportionClass } = useImagesStore();
  return (
    <div className="flex justify-end gap-4 my-8">
      <Button
        variant="secondary"
        onClick={() => setProportionClass('square')}
        aria-label="Definir proporção quadrada"
      >
        <Square className="w-4 h-4" /> Quadrado
      </Button>
      <Button
        variant="secondary"
        onClick={() => setProportionClass('3/4')}
        aria-label="Definir proporção retrato"
      >
        <RectangleVertical className="w-4 h-4" /> Retrato
      </Button>
      <Button
        variant="secondary"
        onClick={() => setProportionClass('16/9')}
        aria-label="Definir proporção paisagem"
      >
        <RectangleHorizontal className="w-4 h-4" /> Paisagem
      </Button>
    </div>
  );
}
