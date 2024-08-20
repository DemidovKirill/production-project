import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/Router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { useTheme } from 'shared/contexts/theme-context';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LOCAL_STORAGE_USER_DATA_KEY } from 'shared/constants/local-storage-keys';
import { userActions } from 'entities/User';
import { getUserIsMounted } from 'entities/User/models/selectors/getUserIsMounted/getUserIsMounted';

const App = () => {
  const { theme } = useTheme();
  const isMounted = useSelector(getUserIsMounted);
  const dispatch = useDispatch();

  useEffect(() => {
    const userData = localStorage.getItem(LOCAL_STORAGE_USER_DATA_KEY);

    if (userData) {
      dispatch(userActions.initUserData(JSON.parse(userData)));
    }
  }, [dispatch]);

  return (
    <div id="app" className={classNames('app', {}, [theme])}>
      <Navbar />
      <div className="pade-content">
        <Sidebar />
        <ErrorBoundary>
          {isMounted && <AppRouter />}
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default App;
