import create from 'zustand';

let store = (set) => ({
  queries: {},
  addQuery: (query) => set((state) => ({ queries: { ...state.queries, query } })),
});

const useStore = create(store);

export default useStore;
