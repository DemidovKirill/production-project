import { memo, Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from 'widgets/PageLoader';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { routeConfig } from '../config/routerConfig';

const AppRouter = () => {
  const isAuth = useSelector(getUserAuthData);

  const routes = useMemo(() => Object.values(routeConfig).filter((route) => !(route.authOnly && !isAuth)), [isAuth]);

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {
          routes
            .map(({ path, element }) => (
              <Route key={path} path={path} element={<main className="main">{element}</main>} />
            ))
        }
      </Routes>
    </Suspense>
  );
};

export default memo(AppRouter);
