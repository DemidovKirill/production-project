import 'app/styles/index.scss';
import { Theme, ThemeProvider } from 'shared/contexts/theme-context';
import { StoryFn } from '@storybook/react';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => (
  <div className={`app ${theme}`}>
    <StoryComponent />
  </div>
);
