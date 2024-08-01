import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { StoreSchema, StoreWithReducerManager } from './store-schema';
import { createReducerManager } from './reducer-manager';

export const createReduxStore = (
  initialState?: StoreSchema,
  asyncReducer?: ReducersMapObject<StoreSchema>,
) => {
  const rootReducer: ReducersMapObject<StoreSchema> = {
    ...asyncReducer,
    counter: counterReducer,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducer);
  const store = configureStore<StoreSchema>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });

  (store as StoreWithReducerManager).reducerManager = reducerManager;

  return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
