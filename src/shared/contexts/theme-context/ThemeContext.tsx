import {
  createContext, FunctionComponent, useMemo, useState,
} from 'react';
import { LOCAL_STORAGE_THEME_KEY } from 'shared/constants/local-storage-keys';

export enum Theme {
  LIGHT = 'light-theme',
  DARK = 'dark-theme',
}

export interface ThemeContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.DARK;

interface ThemeProviderProps {
  initialTheme?: Theme;
}

const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({ initialTheme, children }) => {
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);
  const defaultProps = useMemo(() => ({
    theme,
    setTheme,
  }), [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
