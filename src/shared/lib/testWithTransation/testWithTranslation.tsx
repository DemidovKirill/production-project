import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { ReactNode } from 'react';
import i18n from '../../config/i18n-jest';

export const testWithTranslation = (children: ReactNode) => render(
  <I18nextProvider i18n={i18n}>
    {children}
  </I18nextProvider>,
);
