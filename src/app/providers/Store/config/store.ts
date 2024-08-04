import {
  configureStore, ReducersMapObject,
} from '@reduxjs/toolkit';
import { userReducer } from 'entities/User';
import { $api } from 'shared/api/api';
import { CombinedState, Reducer } from 'redux';
import { StoreSchema, StoreWithReducerManager } from './store-schema';
import { createReducerManager } from './reducer-manager';

export const createReduxStore = (
  initialState?: StoreSchema,
  asyncReducer?: ReducersMapObject<StoreSchema>,
) => {
  const rootReducer: ReducersMapObject<StoreSchema> = {
    ...asyncReducer,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducer);
  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StoreSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument: { api: $api },
      },
    }),
  });

  (store as StoreWithReducerManager).reducerManager = reducerManager;

  return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
