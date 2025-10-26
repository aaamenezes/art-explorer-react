import { ARTS_PER_PAGE } from '@/data/constants';
import { getAllArtworksIDs, getArtworkByID } from '@/lib/metApi';
import { ArtworksPaginationState } from '@/types/artwork';
import { create } from 'zustand';

export const useArtworkStore = create<ArtworksPaginationState>((set, get) => ({
  allArtworksIDs: [],
  artworksData: [],
  currentPage: 1,
  loading: false,
  error: null,
  hasMore: true,
  loadAllArtworksIDsFromApi: async ({
    keywordSearch,
    departmentId,
    artistOrCulture,
  }) => {
    if (keywordSearch.trim() === '') {
      set({ allArtworksIDs: [], artworksData: [] });
      return;
    }

    const { loading } = get();
    if (loading) return;

    try {
      set({ loading: true, error: null });
      const artworks = await getAllArtworksIDs({
        keywordSearch,
        departmentId,
        artistOrCulture,
      });

      set({ allArtworksIDs: artworks?.objectIDs || [] });
    } catch (error) {
      set({ error: `Falha ao carregar obras. ${error}` });
    } finally {
      set({ loading: false });
    }
  },
  loadArtworksByPage: async (nextPage: number) => {
    const { allArtworksIDs, artworksData, loading } = get();
    if (loading) return;

    try {
      set({ loading: true, error: null, hasMore: nextPage > 1 });

      const startIndex = (nextPage - 1) * ARTS_PER_PAGE;
      const endIndex = startIndex + ARTS_PER_PAGE;
      const artworksIDs =
        allArtworksIDs
          ?.slice(startIndex, endIndex)
          .map(objectId => objectId.toString()) || [];

      const artworksPromises = artworksIDs.map(getArtworkByID);
      const newArtworks = await Promise.all(artworksPromises).then(results =>
        results.filter(result => result !== null)
      );

      const isNewSearch = nextPage === 1;

      set({
        artworksData: isNewSearch
          ? newArtworks
          : [...artworksData, ...newArtworks],
        currentPage: nextPage,
        hasMore: endIndex < (allArtworksIDs?.length || 0),
      });
    } catch (error) {
      set({ error: `Falha ao carregar obras. ${error}`, hasMore: false });
    } finally {
      set({ loading: false });
    }
  },
  reset: () => {
    set({
      allArtworksIDs: [],
      artworksData: [],
      currentPage: 1,
      loading: false,
      error: null,
      hasMore: true,
    });
  },
}));
