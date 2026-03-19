export interface KnownBaseTheme {
  colors: {
    [key: string]: string;
  };
}

export interface BaseTheme extends KnownBaseTheme {
  [key: string]: any;
}

export enum ThemeModeOptions {
  Light = 'light',
  Dark = 'dark',
  System = 'system',
}

export type ThemeMode =
  | ThemeModeOptions.Light
  | ThemeModeOptions.Dark
  | ThemeModeOptions.System;
