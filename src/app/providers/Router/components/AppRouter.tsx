import { memo, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from 'widgets/PageLoader';
import { AppPrivateRoutes } from 'app/providers/Router/components/AppPrivateRoutes';
import { routeConfig } from '../config/routerConfig';

const AppRouter = () => (
  <Suspense fallback={<PageLoader />}>
    <Routes>
      <Route path={routeConfig.main.path} element={routeConfig.main.element} />
      <Route path={routeConfig.about.path} element={routeConfig.about.element} />
      <Route element={<AppPrivateRoutes />}>
        <Route path={routeConfig.profile.path} element={routeConfig.profile.element} />
        <Route path={routeConfig.articles.path} element={routeConfig.articles.element} />
        <Route path={routeConfig.article_details.path} element={routeConfig.article_details.element} />
      </Route>
      <Route path={routeConfig.not_found.path} element={routeConfig.not_found.element} />
    </Routes>
  </Suspense>
);

export default memo(AppRouter);
