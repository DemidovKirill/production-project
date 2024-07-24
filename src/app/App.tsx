import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/Router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';

const App = () => (
  <div id="app" className={classNames('app', {}, [])}>
    <Navbar />
    <div className="pade-content">
      <Sidebar />
      <ErrorBoundary>
        <AppRouter />
      </ErrorBoundary>
    </div>
  </div>
);

export default App;
