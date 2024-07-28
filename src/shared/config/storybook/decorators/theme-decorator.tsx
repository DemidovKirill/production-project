import 'app/styles/index.scss';
import { Theme, ThemeProvider } from 'shared/contexts/theme-context';
import { StoryFn } from '@storybook/react';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => (
  <ThemeProvider initialTheme={theme}>
    <div className={`app ${theme}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <StoryComponent />
    </div>
  </ThemeProvider>
);
