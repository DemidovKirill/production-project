import 'app/styles/index.scss';
import { StoryFn } from '@storybook/react';
import { DeepPartial, StoreProvider, StoreSchema } from 'app/providers/Store';

export const StoreDecorator = (state: DeepPartial<StoreSchema>) => (StoryComponent: StoryFn) => (
  <StoreProvider initialState={state as StoreSchema}>
    <StoryComponent />
  </StoreProvider>
);
