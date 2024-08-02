import { ReducersKeys, StoreWithReducerManager } from 'app/providers/Store/config/store-schema';
import { Reducer } from '@reduxjs/toolkit';
import { useDispatch, useStore } from 'react-redux';
import { useEffect } from 'react';

export type ReducerList = {
  [key in ReducersKeys]?: Reducer
}

type ReducerListEntries = [ReducersKeys, Reducer];

export const useLazyReducerImports = (
  reducers: ReducerList,
  removeAfterUnmount: boolean = true,
) => {
  const store = useStore() as StoreWithReducerManager;
  const dispatch = useDispatch();

  useEffect(() => {
    Object.entries(reducers).forEach(([reducerKey, reducer]: ReducerListEntries) => {
      if (!store.reducerManager.has(reducerKey)) {
        store.reducerManager.add(reducerKey, reducer);
        dispatch({ type: `@INIT ${reducerKey} reducer` });
      }
    });

    return () => {
      if (removeAfterUnmount) {
        Object.keys(reducers).forEach((reducerKey: ReducersKeys) => {
          store.reducerManager.remove(reducerKey);
          dispatch({ type: `@DESTROY ${reducerKey} reducer` });
        });
      }
    };
  }, [dispatch, reducers, removeAfterUnmount, store.reducerManager]);
};
