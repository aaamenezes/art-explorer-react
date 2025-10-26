import { ArtworkProps } from '@/types/artwork';

export function buildArtworkAltText(artwork: ArtworkProps) {
  return `${artwork.title}, ${artwork.artistDisplayName} (${artwork.artistDisplayBio}), ${artwork.medium}, ${artwork.culture}`;
}
