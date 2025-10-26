import { MetApiAllArtworksIDsResponse } from './metApi';

export interface ArtworkProps {
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

interface LoadAllArtworksIDsFromApiProps {
  keywordSearch: string;
  departmentId?: number;
  artistOrCulture?: boolean;
}

export interface ArtworksPaginationState {
  allArtworksIDs: MetApiAllArtworksIDsResponse['objectIDs'];
  artworksData: ArtworkProps[];
  currentPage: number;
  loading: boolean;
  error: string | null;
  hasMore: boolean;
  loadAllArtworksIDsFromApi: ({
    keywordSearch,
    departmentId,
    artistOrCulture,
  }: LoadAllArtworksIDsFromApiProps) => Promise<void>;
  loadArtworksByPage: (page: number) => Promise<void>;
  reset: () => void;
}
