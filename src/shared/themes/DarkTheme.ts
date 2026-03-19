import { AppColors } from './colors';
import createTheme from './createTheme';
import { LightTheme } from './LightTheme';

export const DarkTheme = createTheme({
  ...LightTheme,
  colors: {
    background: AppColors.BLACK,
    primaryText: AppColors.WHITE,
  },
});
