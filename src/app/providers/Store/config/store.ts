import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { StoreSchema } from './store-schema';

const rootReducer = combineReducers({
  counter: counterReducer,
});

export const createReduxStore = (initialState?: StoreSchema) => configureStore<StoreSchema>({
  reducer: rootReducer,
  devTools: __IS_DEV__,
  preloadedState: initialState,
});

export type AppStore = ReturnType<typeof createReduxStore>;
export type AppDispatch = AppStore['dispatch'];
