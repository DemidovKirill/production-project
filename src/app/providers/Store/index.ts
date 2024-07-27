export { StoreProvider } from './components/StoreProvider';
export { createReduxStore } from './config/store';
export { useAppDispatch } from './hooks/custom-hooks';
export type { StoreSchema } from './config/store-schema';

type DeepPartial<T extends Record<string | symbol | number, any>> = {
  [K in keyof T]?: T[K] extends Record<string, any>
    ? DeepPartial<T[K]>
    : T[K]
}

export type { DeepPartial };
