import 'app/styles/index.scss';
import { Theme } from 'shared/contexts/theme-context';
import { StoryFn } from '@storybook/react';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => (
  <div className={`${theme}`}>
    <StoryComponent />
  </div>
);
