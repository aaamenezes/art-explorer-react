import { ArtWorkProps } from '@/types/artwork';

export function buildArtWorkAltText(artWork: ArtWorkProps) {
  return `${artWork.title}, ${artWork.artistDisplayName} (${artWork.artistDisplayBio}), ${artWork.medium}, ${artWork.culture}`;
}
