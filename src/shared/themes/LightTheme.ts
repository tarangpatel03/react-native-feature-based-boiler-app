import { AppColors } from '@/shared/themes';
import createTheme from './createTheme';

export const LightTheme = createTheme({
  colors: {
    background: AppColors.WHITE,
    primaryText: AppColors.APP_212121,
  },
});

export type Theme = typeof LightTheme;
