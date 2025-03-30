import { create } from 'zustand';

import type { StoreState } from './store.types';

export const useStore = create<StoreState>((set) => ({}));
