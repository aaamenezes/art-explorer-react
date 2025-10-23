import { getAllArtWorksIDs, getArtWorkById } from '@/lib/metApi';
import { ArtWorksPaginationState } from '@/types/artwork';
import { create } from 'zustand';

export const useArtworkStore = create<ArtWorksPaginationState>((set, get) => ({
  allArtWorksIDs: [],
  artWorksData: [],
  currentPage: 1,
  loading: false,
  error: null,
  hasMore: true,
  loadAllArtWorksIDsFromApi: async ({
    keywordSearch,
    departmentId,
    artistOrCulture,
  }) => {
    if (keywordSearch.trim() === '') {
      set({ allArtWorksIDs: [], artWorksData: [] });
      return;
    }

    const { loading } = get();
    if (loading) return;

    try {
      set({ loading: true, error: null });
      const artworks = await getAllArtWorksIDs(
        keywordSearch,
        departmentId,
        artistOrCulture
      );

      set({ allArtWorksIDs: artworks?.objectIDs || [] });
    } catch (error) {
      set({ error: `Falha ao carregar obras. ${error}` });
    } finally {
      set({ loading: false });
    }
  },
  loadArtWorksByPage: async (nextPage: number) => {
    const { allArtWorksIDs, artWorksData, loading } = get();
    if (loading) return;

    try {
      set({ loading: true, error: null, hasMore: nextPage > 1 });

      const ARTS_PER_PAGE = 15;

      const startIndex = (nextPage - 1) * ARTS_PER_PAGE;
      const endIndex = startIndex + ARTS_PER_PAGE;
      const artWorksIDs = allArtWorksIDs
        .slice(startIndex, endIndex)
        .map(objectId => objectId.toString());

      const artWorksPromises = artWorksIDs.map(getArtWorkById);
      const newArtWorks = await Promise.all(artWorksPromises).then(results =>
        results.filter(result => result !== null)
      );

      const isNewSearch = nextPage === 1;

      set({
        artWorksData: isNewSearch
          ? newArtWorks
          : [...artWorksData, ...newArtWorks],
        currentPage: nextPage,
        hasMore: endIndex < allArtWorksIDs.length,
      });
    } catch (error) {
      set({ error: `Falha ao carregar obras. ${error}`, hasMore: false });
    } finally {
      set({ loading: false });
    }
  },
  reset: () => {
    set({
      allArtWorksIDs: [],
      artWorksData: [],
      currentPage: 1,
      loading: false,
      error: null,
      hasMore: true,
    });
  },
}));
