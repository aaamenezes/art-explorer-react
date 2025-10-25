import { ASPECT_RATIO_CLASSNAME_PREFIX } from '@/data/constants';

type ProportionClassName =
  `${typeof ASPECT_RATIO_CLASSNAME_PREFIX}${Proportion}`;

export type Proportion = 'square' | '3/4' | '16/9';

export interface ImageState {
  proportionClass: ProportionClassName;
  setProportionClass: (proportion: Proportion) => void;
}
