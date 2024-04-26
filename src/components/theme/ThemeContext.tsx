import React, { createContext, useContext, useState, useEffect } from 'react';
import themes from '../../../themes.json';
const defaultTheme = 'grayscale';
const defaultVariant = 'dark';
interface ThemeContextType {
  theme: string;
  variant: string;
  setTheme: (theme: { themeName: string; variantName: string }) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: defaultTheme,
  variant: defaultVariant,
  setTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [themeState, setThemeState] = useState({
      theme: defaultTheme,
      variant: defaultVariant,
  });

  useEffect(() => {
      const storedTheme = localStorage.getItem('theme') || defaultTheme;
      const storedVariant = localStorage.getItem('variant') || defaultVariant;
      setTheme({ themeName: storedTheme, variantName: storedVariant });
  }, []);

  const setTheme = ({ themeName, variantName = defaultVariant }: { themeName: string; variantName: string }) => {
      const themeToApply = themes[themeName]?.[variantName];

      if (themeToApply) {
          const rootStyles = Object.entries(themeToApply)
              .map(([key, value]) => `--${key}: ${value};`)
              .join(' ');

          const root = document.documentElement;
          root.style.cssText = rootStyles;

          setThemeState({ theme: themeName, variant: variantName });
          localStorage.setItem('theme', themeName);
          localStorage.setItem('variant', variantName);
      } else {
          console.warn(`Theme "${themeName}" not found or variant not provided`);
      }
  };

  const contextValue = {
      ...themeState,
      setTheme,
  };

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
export default ThemeContext;
