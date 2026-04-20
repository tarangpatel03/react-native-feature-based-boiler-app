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
  input: {
    text: '#FFFFFF',
    placeholder: '#8E8E93',
    background: '#1C1C1E',
    border: '#3A3A3C',
    focusBorder: '#60A5FA',
    error: '#F87171',
    label: '#EBEBF5',
    filledBackground: '#2C2C2E',
  },
  shimmer: {
    shimmerBackground: '#3A3A3A',
    shimmerHighlight: '#2A2A2A',
  },
});
