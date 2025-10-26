import z from 'zod';
import { MetApiAllArtworksIDsProps } from './metApi';

export const artworkSchema = z.object({
  objectID: z.number(),
  title: z.string(),
  primaryImage: z.string(),
  primaryImageSmall: z.string(),
  artistDisplayName: z.string(),
  artistDisplayBio: z.string(),
  culture: z.string(),
  objectDate: z.string(),
  medium: z.string(),
  department: z.string(),
  objectURL: z.string(),
});

export type ArtworkProps = z.infer<typeof artworkSchema>;

interface LoadAllArtworksIDsFromApiProps {
  keywordSearch: string;
  departmentId?: number;
  artistOrCulture?: boolean;
}

export interface ArtworksPaginationState {
  allArtworksIDs: MetApiAllArtworksIDsProps['objectIDs'];
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
