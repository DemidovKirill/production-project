import { FunctionComponent } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'shared/contexts/theme-context';
import { ReactComponent as DarkThemeIcon } from 'shared/assets/icon/theme/theme-dark.svg';
import { ReactComponent as LightThemeIcon } from 'shared/assets/icon/theme/theme-light.svg';
import style from './style.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FunctionComponent<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      className={classNames(style.themeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <LightThemeIcon /> : <DarkThemeIcon />}
    </button>
  );
};

export default ThemeSwitcher;
