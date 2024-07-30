import 'app/styles/index.scss';
import { StoryFn } from '@storybook/react';
import { DeepPartial, StoreProvider, StoreSchema } from 'app/providers/Store';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { authReducer } from 'features/AuthByUsername';

const defaultAsyncReducers: ReducersMapObject<DeepPartial<StoreSchema>> = {
  auth: authReducer,
};

export const StoreDecorator = (
  state: DeepPartial<StoreSchema>,
  asyncReducers: ReducersMapObject<DeepPartial<StoreSchema>>,
) => (StoryComponent: StoryFn) => (
  <StoreProvider
    initialState={state as StoreSchema}
    asyncReducer={{ ...defaultAsyncReducers, ...asyncReducers }}
  >
    <StoryComponent />
  </StoreProvider>
);
