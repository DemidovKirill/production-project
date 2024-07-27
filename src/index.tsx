import { Suspense } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'shared/contexts/theme-context';
import './app/styles/index.scss';

import 'shared/config/i18n';
import { StoreProvider } from 'app/providers/Store';
import App from './app/App';

render(
  <StoreProvider>
    <BrowserRouter>
      <ThemeProvider>
        <Suspense fallback="">
          <App />
        </Suspense>
      </ThemeProvider>
    </BrowserRouter>
  </StoreProvider>,
  document.getElementById('root'),
);
