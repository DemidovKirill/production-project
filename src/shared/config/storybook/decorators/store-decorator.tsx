import 'app/styles/index.scss';
import { StoryFn } from '@storybook/react';
import { StoreProvider, StoreSchema } from 'app/providers/Store';
import { authReducer } from 'features/AuthByUsername';
import { profileReducer } from 'entities/Profile';
import { ReducerList } from 'shared/lib/hooks/useLazyReducerImport';

const defaultAsyncReducers: ReducerList = {
  auth: authReducer,
  profile: profileReducer,
};

export const StoreDecorator = (
  state: DeepPartial<StoreSchema>,
  asyncReducers?: ReducerList,
) => (StoryComponent: StoryFn) => (
  <StoreProvider
    initialState={state as StoreSchema}
    asyncReducer={{ ...defaultAsyncReducers, ...asyncReducers }}
  >
    <StoryComponent />
  </StoreProvider>
);
