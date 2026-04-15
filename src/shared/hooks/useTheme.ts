import { useContext } from 'react';
import { BaseTheme } from '../types';
import { ThemeContext } from '@/app/providers';

export const useTheme = <Theme extends BaseTheme = BaseTheme>() =>
  useContext(ThemeContext) as Theme;
