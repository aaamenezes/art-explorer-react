import { MetApiAllArtWorksResponse } from './metApi';

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
  allArtWorksIDs: MetApiAllArtWorksResponse['objectIDs'];
  artWorksData: ArtWorkProps[];
  currentPage: number;
  loading: boolean;
  error: string | null;
  hasMore: boolean;
  loadAllArtWorksIDsFromApi: (keyWordSearch: string) => Promise<void>;
  loadArtWorksByPage: (page: number) => Promise<void>;
}
