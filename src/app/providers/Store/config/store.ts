import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { authReducer } from 'features/AuthByUsername';
import { StoreSchema } from './store-schema';

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
  auth: authReducer,
});

export const createReduxStore = (initialState?: StoreSchema) => configureStore<StoreSchema>({
  reducer: rootReducer,
  devTools: __IS_DEV__,
  preloadedState: initialState,
});

export type AppStore = ReturnType<typeof createReduxStore>;
export type AppDispatch = AppStore['dispatch'];
