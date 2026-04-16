import { AppColors } from './colors';
import createTheme from './createTheme';
import { LightTheme } from './LightTheme';

export const DarkTheme = createTheme({
  ...LightTheme,
  colors: {
    background: AppColors.BLACK,
    primaryText: AppColors.WHITE,
  },
  toast: {
    success: {
      primary: '#22C55E',
      background: '#052E1B',
      text: '#86EFAC',
    },
    error: {
      primary: '#EF4444',
      background: '#2B0B0B',
      text: '#FCA5A5',
    },
    info: {
      primary: '#3B82F6',
      background: '#0A1A33',
      text: '#93C5FD',
    },
  },
});
