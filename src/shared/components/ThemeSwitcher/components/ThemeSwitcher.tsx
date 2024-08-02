import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'shared/contexts/theme-context';
import DarkThemeIcon from 'shared/assets/icon/theme/theme-dark.svg';
import LightThemeIcon from 'shared/assets/icon/theme/theme-light.svg';
import { AppButton, ButtonAppearance } from 'shared/components/AppButton/AppButton';
import { memo } from 'react';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <AppButton
      appearance={[ButtonAppearance.CLEAR]}
      className={classNames('', {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <LightThemeIcon /> : <DarkThemeIcon />}
    </AppButton>
  );
});
