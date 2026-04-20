import React, { useMemo } from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { ThemeProvider } from './ThemeProvider';
import Toast from 'react-native-toast-message';
import { useNetworkListener } from '@/shared/hooks';
import { ThemeModeOptions } from '@/shared/types';
import { DarkTheme, LightTheme } from '@/shared/themes';
import { GlobalLoader, OfflineBanner } from '@/shared/ui';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/shared/network';
import { toastConfig } from '@/shared/toast';

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
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={currentTheme}>
        <StatusBar
          barStyle={currentTheme === DarkTheme ? 'light-content' : 'dark-content'}
        />
        {children}
        <GlobalLoader />
        <OfflineBanner />
        <Toast config={toastConfig} />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default AppProvider;
