import React from 'react';
import './styles/index.scss';
import {useTheme} from "shared/contexts/theme-context";
import {classNames} from "shared/lib/classNames";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import ThemeSwitcher from "shared/components/ThemeSwitcher/ThemeSwitcher";

const App = () => {
const {theme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <ThemeSwitcher />
      <AppRouter/>
    </div>
  );
};

export default App;