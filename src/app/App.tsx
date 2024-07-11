import './styles/index.scss';
import { useTheme } from 'shared/contexts/theme-context';
import { classNames } from 'shared/lib/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <div className="pade-content">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
};

export default App;
