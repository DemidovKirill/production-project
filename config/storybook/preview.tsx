import type { Preview } from '@storybook/react';
import { RouterDecorator } from '../../src/shared/config/storybook/decorators/router-decorator';
import { StyleDecorator } from '../../src/shared/config/storybook/decorators/style-decorator';

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

export const decorators = [StyleDecorator, RouterDecorator];

export default preview;
