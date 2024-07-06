import {FunctionComponent} from 'react';
import {classNames} from "shared/lib/classNames";
import style from './style.module.scss';
import {Theme, useTheme} from "shared/contexts/theme-context";
import { ReactComponent as DarkThemeIcon } from 'shared/assets/icon/theme/theme-dark.svg';
import { ReactComponent as LightThemeIcon } from 'shared/assets/icon/theme/theme-light.svg';

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
      {theme === Theme.DARK ? <LightThemeIcon /> : <DarkThemeIcon />}
    </button>
  );
};

export default ThemeSwitcher;
