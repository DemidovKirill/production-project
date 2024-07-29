import 'app/styles/index.scss';
import { StoryFn } from '@storybook/react';
import { I18nextProvider } from 'react-i18next';
import { Suspense, useEffect } from 'react';
import i18n from '../../i18n';

export const TranslateDecorator = (StoryComponent: StoryFn, context: { globals: { locale: any; }; }) => {
  // eslint-disable-next-line react/destructuring-assignment
  const { locale } = context.globals;

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  return (
    <Suspense fallback="">
      <I18nextProvider i18n={i18n}>
        <StoryComponent />
      </I18nextProvider>
    </Suspense>
  );
};
