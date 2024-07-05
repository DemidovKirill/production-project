import React from 'react';
import './styles/index.scss';
import {Link} from "react-router-dom";
import {useTheme} from "shared/contexts/theme-context";
import {classNames} from "shared/lib/classNames";
import {AppRouter} from "app/providers/router";

const App = () => {
const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Link to={'/'}>MAIN</Link>
      <Link to={'/about'}>ABOUT</Link>

      <button onClick={toggleTheme}>Toggle Theme</button>

      <AppRouter/>
    </div>
  );
};

export default App;