import {FunctionComponent} from 'react';
import {classNames} from "shared/lib/classNames";
import style from './style.module.scss';
import {useTheme} from "shared/contexts/theme-context";
import AppButton, {ButtonAppearance} from "shared/components/AppButton/AppButton";

interface ThemeSwitcher {
  className?: string;
}

const ThemeSwitcher: FunctionComponent<ThemeSwitcher> = ({className}) => {
  const {toggleTheme} = useTheme();

  return (
    <AppButton
      className={classNames(style.themeSwitcher, {}, [className])}
      onClick={toggleTheme}
      appearance={ButtonAppearance.PRIMARY}
    >
      Toggle Theme
    </AppButton>
  );
};

export default ThemeSwitcher;
