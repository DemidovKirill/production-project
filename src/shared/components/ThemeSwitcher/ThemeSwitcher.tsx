import { FunctionComponent } from 'react';
import { classNames } from "shared/lib/classNames";
import style from './style.module.scss';
import {useTheme} from "shared/contexts/theme-context";

interface ThemeSwitcher {
  className?: string;
}

const ThemeSwitcher: FunctionComponent<ThemeSwitcher> = ({className}) => {
  const {theme, toggleTheme} = useTheme();

  return (
    <button
      className={classNames(style.themeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      Toggle Theme
    </button>
  );
};

export default ThemeSwitcher;
