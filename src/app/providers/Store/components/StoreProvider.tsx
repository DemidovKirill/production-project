import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { StoreSchema } from '../config/store-schema';
import { createReduxStore } from '../config/store';

interface StoreProviderProps {
  children: ReactNode;
  initialState?: StoreSchema;
  asyncReducer?: DeepPartial<ReducersMapObject<StoreSchema>>;
}

export const StoreProvider: FC<StoreProviderProps> = (props) => {
  const { children, initialState, asyncReducer } = props;
  const store = createReduxStore(
    initialState as StoreSchema,
    asyncReducer as ReducersMapObject<StoreSchema>,
  );

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
