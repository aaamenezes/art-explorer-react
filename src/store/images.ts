import { ASPECT_RATIO_CLASSNAME_PREFIX } from '@/data/constants';
import { ImageState, Proportion } from '@/types/images';
import { create } from 'zustand';

export const useImagesStore = create<ImageState>(set => ({
  proportionClass: 'aspect-square',
  setProportionClass: (proportion: Proportion) => {
    set(() => ({
      proportionClass: `${ASPECT_RATIO_CLASSNAME_PREFIX}${proportion}`,
    }));
  },
}));
