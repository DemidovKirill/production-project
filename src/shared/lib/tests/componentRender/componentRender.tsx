import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18n from '../../../config/i18n-jest';

export interface componentRenderOptions {
  route?: string;
}

export function componentRender(component: ReactNode, options: componentRenderOptions = {}) {
  const {
    route = '/',
  } = options;

  return render(
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18n}>
        {component}
      </I18nextProvider>
    </MemoryRouter>,
  );
}
