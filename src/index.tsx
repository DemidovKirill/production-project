import { Suspense } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'shared/contexts/theme-context';

import 'shared/config/i18n';
import App from './app/App';

render(
  <BrowserRouter>
    <ThemeProvider>
      <Suspense fallback="">
        <App />
      </Suspense>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
