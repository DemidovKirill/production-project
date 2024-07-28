import type { Preview } from '@storybook/react';
import { Theme } from 'shared/contexts/theme-context';
import { RouterDecorator } from '../../src/shared/config/storybook/decorators/router-decorator';
import { StyleDecorator } from '../../src/shared/config/storybook/decorators/style-decorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/decorators/theme-decorator';
import { TranslateDecorator } from '../../src/shared/config/storybook/decorators/translate-decorator';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'en', title: 'English' },
        { value: 'ru', title: 'Russia' },
      ],
      showName: true,
    },
  },
};

export const decorators = [StyleDecorator, RouterDecorator, ThemeDecorator(Theme.DARK), TranslateDecorator];

export default preview;
