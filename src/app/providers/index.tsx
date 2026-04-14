import {
  DarkTheme,
  GlobalLoader,
  LightTheme,
  OfflineBanner,
  ThemeModeOptions,
  useNetworkListener,
} from '@/shared';
import React, { useMemo } from 'react';
import { useColorScheme } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '@/app';
import { ThemeProvider } from './ThemeProvider';
import Toast from 'react-native-toast-message';

type Props = {
  children: React.ReactNode;
};

const AppProvider = ({ children }: Props) => {
  const deviceTheme = useColorScheme();
  const currentThemeMode = useSelector((state: RootState) => state.USER.currentThemeMode);

  useNetworkListener();

  const currentTheme = useMemo(() => {
    if (currentThemeMode === ThemeModeOptions.System) {
      return deviceTheme === ThemeModeOptions.Dark ? DarkTheme : LightTheme;
    }
    return currentThemeMode === ThemeModeOptions.Dark ? DarkTheme : LightTheme;
  }, [deviceTheme, currentThemeMode]);
  return (
    <ThemeProvider theme={currentTheme}>
      {children}
      <GlobalLoader />
      <OfflineBanner />
      <Toast />
    </ThemeProvider>
  );
};

export default AppProvider;
