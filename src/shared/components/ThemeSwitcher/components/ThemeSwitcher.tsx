import { Theme, useTheme } from 'shared/contexts/theme-context';
import DarkThemeIcon from 'shared/assets/icon/theme/theme-dark.svg';
import LightThemeIcon from 'shared/assets/icon/theme/theme-light.svg';
import { AppButton, ButtonAppearance } from 'shared/components/AppButton/AppButton';
import { memo } from 'react';

export const ThemeSwitcher = memo(() => {
  const { theme, toggleTheme } = useTheme();

  return (
    <AppButton
      appearance={[ButtonAppearance.CLEAR]}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <LightThemeIcon /> : <DarkThemeIcon />}
    </AppButton>
  );
});
