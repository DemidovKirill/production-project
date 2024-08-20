import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { Outlet, Navigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routerPathConfig';

export const AppPrivateRoutes = () => {
  const auth = useSelector(getUserAuthData);

  return auth ? <Outlet /> : <Navigate to={RoutePath.main} />;
};
