import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { AppRoutes, RoutePath } from 'shared/config/routerPathConfig';
import { NotFound } from 'pages/NotFound';

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    'path': RoutePath[AppRoutes.MAIN],
    'element': <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    'path': RoutePath[AppRoutes.ABOUT],
    'element': <AboutPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    'path': RoutePath[AppRoutes.NOT_FOUND],
    'element': <NotFound />,
  },
};
