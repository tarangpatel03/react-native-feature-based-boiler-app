import React, { useMemo } from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { ThemeProvider } from './ThemeProvider';
import Toast from 'react-native-toast-message';
import { useNetworkListener } from '@/shared/hooks';
import { ThemeModeOptions } from '@/shared/types';
import { DarkTheme, LightTheme } from '@/shared/themes';
import { GlobalLoader, OfflineBanner } from '@/shared/components';

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
      <StatusBar
        barStyle={currentTheme === DarkTheme ? 'light-content' : 'dark-content'}
      />
      {children}
      <GlobalLoader />
      <OfflineBanner />
      <Toast />
    </ThemeProvider>
  );
};

export default AppProvider;
