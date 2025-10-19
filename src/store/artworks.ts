import { getArtWorksByPage } from '@/lib/metApi';
import { ArtWorksPaginationState } from '@/types/artwork';
import { create } from 'zustand';

export const useArtworkStore = create<ArtWorksPaginationState>((set, get) => ({
  artworks: [],
  page: 1,
  loading: false,
  error: null,
  hasMore: true,

  loadArtworks: async () => {
    const { page, loading, artworks } = get();
    if (loading) return;

    try {
      set({ loading: true, error: null });
      const newArtworks = await getArtWorksByPage(page.toString());

      set({
        artworks: [...artworks, ...newArtworks],
        page: page + 1,
        hasMore: newArtworks.length === 15,
      });
    } catch (error) {
      set({ error: `Falha ao carregar obras. ${error}` });
    } finally {
      set({ loading: false });
    }
  },

  reset: () => set({ artworks: [], page: 1, hasMore: true }),
}));
