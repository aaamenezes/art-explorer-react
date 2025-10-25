// src/hooks/useFavorite.test.ts
import { renderHook, act } from '@testing-library/react';
import { useFavorite } from '@/hooks/useFavorite'; // ajuste o caminho se for diferente
import { LOCAL_STORAGE_FAVORITES_KEY } from '@/data/constants';

// Mock do localStorage
const mockLocalStorage = (() => {
  let store: Record<string, string> = {};

  return {
    getItem: jest.fn(key => store[key] || null),
    setItem: jest.fn((key, value) => {
      store[key] = value;
    }),
    clear: jest.fn(() => {
      store = {};
    }),
    removeItem: jest.fn(key => {
      delete store[key];
    }),
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: mockLocalStorage,
});

describe('useFavorite', () => {
  beforeEach(() => {
    window.localStorage.clear();
    jest.clearAllMocks();
  });

  const sampleArtWork = {
    objectID: 1,
    title: 'Mona Lisa',
    primaryImage: 'big.jpg',
    primaryImageSmall: 'small.jpg',
    artistDisplayName: 'Leonardo da Vinci',
    artistDisplayBio: 'Italian artist, Renaissance',
    culture: 'Italian',
    objectDate: '1503',
    medium: 'Oil on poplar',
    department: 'European Paintings',
    objectURL: 'https://example.com/mona-lisa',
  };

  it('getAll deve retornar um array vazio se localStorage estiver vazio', () => {
    const { result } = renderHook(() => useFavorite());
    const { getAll } = result.current;

    expect(getAll()).toEqual([]);
  });

  it('getAll deve retornar os favoritos salvos no localStorage', () => {
    const favoritesMock = [
      { id: 1, data: sampleArtWork, updatedAt: new Date() },
    ];
    window.localStorage.setItem(
      LOCAL_STORAGE_FAVORITES_KEY,
      JSON.stringify(favoritesMock)
    );

    const { result } = renderHook(() => useFavorite());
    const { getAll } = result.current;

    expect(getAll()).toHaveLength(1);
    expect(getAll()[0].data.title).toBe('Mona Lisa');
  });

  it('isFavorited deve retornar true se o ID estiver salvo', () => {
    const favoritesMock = [
      { id: 1, data: sampleArtWork, updatedAt: new Date() },
    ];
    window.localStorage.setItem(
      LOCAL_STORAGE_FAVORITES_KEY,
      JSON.stringify(favoritesMock)
    );

    const { result } = renderHook(() => useFavorite());
    const { isFavorited } = result.current;

    expect(isFavorited(1)).toBe(true);
    expect(isFavorited(2)).toBe(false);
  });

  it('add deve salvar uma nova obra no localStorage se ela não existir', () => {
    const { result } = renderHook(() => useFavorite());
    const { add, getAll } = result.current;

    act(() => {
      add(sampleArtWork);
    });

    const saved = JSON.parse(
      window.localStorage.getItem(LOCAL_STORAGE_FAVORITES_KEY)!
    );

    expect(saved).toHaveLength(1);
    expect(saved[0].data.title).toBe('Mona Lisa');
    expect(getAll()).toHaveLength(1);
  });

  it('add não deve duplicar uma obra já favoritada', () => {
    const { result } = renderHook(() => useFavorite());
    const { add } = result.current;

    act(() => {
      add(sampleArtWork);
      add(sampleArtWork);
    });

    const saved = JSON.parse(
      window.localStorage.getItem(LOCAL_STORAGE_FAVORITES_KEY)!
    );

    expect(saved).toHaveLength(1);
  });

  it('remove deve excluir uma obra existente do localStorage', () => {
    const { result } = renderHook(() => useFavorite());
    const { add, remove, getAll } = result.current;

    act(() => {
      add(sampleArtWork);
    });

    expect(getAll()).toHaveLength(1);

    act(() => {
      remove(sampleArtWork.objectID);
    });

    const saved = JSON.parse(
      window.localStorage.getItem(LOCAL_STORAGE_FAVORITES_KEY)!
    );

    expect(saved).toEqual([]);
    expect(getAll()).toEqual([]);
  });
});
