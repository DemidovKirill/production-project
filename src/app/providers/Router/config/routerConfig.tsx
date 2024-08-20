import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { AppRoutes, RoutePath } from 'shared/config/routerPathConfig';
import { NotFound } from 'pages/NotFound';
import { ProfilePage } from 'pages/ProfilePage';
import { ArticlesPage } from 'pages/ArticlesPage';
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage';

type AppRouteProps = RouteProps & {
  authOnly?: boolean;
}

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath[AppRoutes.MAIN],
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath[AppRoutes.ABOUT],
    element: <AboutPage />,
  },
  [AppRoutes.PROFILE]: {
    path: RoutePath[AppRoutes.PROFILE],
    element: <ProfilePage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLES]: {
    path: RoutePath[AppRoutes.ARTICLES],
    element: <ArticlesPage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_DETAILS]: {
    path: `${RoutePath[AppRoutes.ARTICLE_DETAILS]}:id`,
    element: <ArticleDetailsPage />,
    authOnly: true,
  },

  // LAST
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath[AppRoutes.NOT_FOUND],
    element: <NotFound />,
  },
};
