import { getArtWorksDepartments } from '@/lib/metApi';
import { DepartamentsState } from '@/types/departament';
import { create } from 'zustand';

export const useDepartamentsStore = create<DepartamentsState>((set, get) => ({
  allDepartaments: [],
  loading: false,
  error: null,
  loadAllDepartamentsFromApi: async () => {
    const { loading } = get();
    if (loading) return;

    try {
      set({ loading: true, error: null });
      const departmentsData = await getArtWorksDepartments();

      set({ allDepartaments: departmentsData?.departments || [] });
    } catch (error) {
      set({ error: `Falha ao carregar departamentos. ${error}` });
    } finally {
      set({ loading: false });
    }
  },
}));
