import { BaseTheme } from '@/shared/types';
import React from 'react';
import StoreProvider from './StoreProvider';

export const ThemeContext = React.createContext({
  colors: {},
});

export const ThemeProvider = ({
  theme,
  children,
}: {
  theme: BaseTheme;
  children: React.ReactNode;
}) => {
  return (
    <StoreProvider>
      <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    </StoreProvider>
  );
};
