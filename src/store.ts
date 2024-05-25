import { create } from "zustand";

interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrder: (sortOrder: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {} as GameQuery,
  setSearchText: (searchText: string) =>
    set(() => ({ gameQuery: { searchText } })),
  setGenreId: (genreId: number) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId: genreId } })),
  setPlatformId: (platformId: number) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, platformId: platformId },
    })),
  setSortOrder: (sortOrder: string) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, sortOrder: sortOrder },
    })),
}));

export default useGameQueryStore;
