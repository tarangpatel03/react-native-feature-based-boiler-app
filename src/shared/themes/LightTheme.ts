import { AppColors } from './colors';
import createTheme from './createTheme';

export const LightTheme = createTheme({
  colors: {
    background: AppColors.WHITE,
    primaryText: AppColors.APP_212121,
  },
  toast: {
    success: {
      primary: '#22C55E',
      background: '#ECFDF5',
      text: '#065F46',
    },
    error: {
      primary: '#EF4444',
      background: '#FEF2F2',
      text: '#7F1D1D',
    },
    info: {
      primary: '#3B82F6',
      background: '#EFF6FF',
      text: '#1E3A8A',
    },
  },
});

export type Theme = typeof LightTheme;
