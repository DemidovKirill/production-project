import {
  createContext, FunctionComponent, useEffect, useMemo, useState,
} from 'react';

export enum Theme {
  LIGHT = 'light-theme',
  DARK = 'dark-theme',
}

export interface ThemeContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

interface ThemeProviderProps {
  initialTheme?: Theme;
}

const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({ initialTheme, children }) => {
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);
  const defaultProps = useMemo(() => ({
    theme,
    setTheme,
  }), [theme]);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
