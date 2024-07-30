import {
  combineReducers, Reducer, ReducersMapObject, UnknownAction,
} from '@reduxjs/toolkit';
import { StoreSchema, ReducersKeys } from './store-schema';

export function createReducerManager(initialReducers: ReducersMapObject<StoreSchema>) {
  const reducers = { ...initialReducers };

  let combinedReducer = combineReducers(reducers);

  let keysToRemove: ReducersKeys[] = [];

  return {
    getReducerMap: () => reducers,
    reduce: (state: StoreSchema, action: UnknownAction) => {
      const newState = { ...state };

      if (keysToRemove.length > 0) {
        keysToRemove.forEach((key) => {
          delete newState[key];
        });
        keysToRemove = [];
      }

      return combinedReducer(newState, action);
    },
    add: (key: ReducersKeys, reducer: Reducer) => {
      if (!key || reducers[key]) {
        return;
      }

      reducers[key] = reducer;
      combinedReducer = combineReducers(reducers);
    },
    remove: (key: ReducersKeys) => {
      if (!key || !reducers[key]) {
        return;
      }

      delete reducers[key];
      keysToRemove.push(key);
      combinedReducer = combineReducers(reducers);
    },
    has: (key: ReducersKeys) => reducers[key] !== undefined,
  };
}
