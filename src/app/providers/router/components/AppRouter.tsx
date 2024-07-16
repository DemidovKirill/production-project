import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from 'widgets/PageLoader';
import { routeConfig } from '../config/routerConfig';

const AppRouter = () => (
  <Suspense fallback={<PageLoader />}>
    <Routes>
      {
        Object.values(routeConfig)
          .map(({ path, element }) => (
            <Route key={path} path={path} element={<main className="main">{element}</main>} />
          ))
      }
    </Routes>
  </Suspense>
);

export default AppRouter;
