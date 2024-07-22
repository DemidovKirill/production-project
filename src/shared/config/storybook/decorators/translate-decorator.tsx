import 'app/styles/index.scss';
import { StoryFn } from '@storybook/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n-storybook';

export const TranslateDecorator = (StoryComponent: StoryFn) => (
  <I18nextProvider i18n={i18n}>
    <StoryComponent />
  </I18nextProvider>
);
