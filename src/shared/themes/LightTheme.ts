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
  input: {
    text: '#000000',
    placeholder: '#8E8E93',
    background: '#FFFFFF',
    border: '#D1D1D6',
    focusBorder: '#3B82F6',
    error: '#EF4444',
    label: '#3C3C43',
    filledBackground: '#F2F2F7',
  },
  shimmer: {
    shimmerBackground: '#C5C5C5',
    shimmerHighlight: '#EBEBEB',
  },
});

export type Theme = typeof LightTheme;
