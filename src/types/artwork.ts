export interface ArtWorkProps {
  objectID: number;
  title: string;
  primaryImage: string;
  primaryImageSmall: string;
  artistDisplayName: string;
  artistDisplayBio: string;
  culture: string;
  objectDate: string;
  medium: string;
  department: string;
  objectURL: string;
}

export interface ArtWorksPaginationState {
  artworks: ArtWorkProps[];
  page: number;
  loading: boolean;
  error: string | null;
  hasMore: boolean;
  loadArtworks: () => Promise<void>;
  reset: () => void;
}
