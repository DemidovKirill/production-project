import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { StoreSchema } from '../config/store-schema';
import { createReduxStore } from '../config/store';

interface StoreProviderProps {
  children: ReactNode;
  initialState?: StoreSchema
}

export const StoreProvider: FC<StoreProviderProps> = ({ children, initialState }) => {
  const store = createReduxStore(initialState as StoreSchema);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
