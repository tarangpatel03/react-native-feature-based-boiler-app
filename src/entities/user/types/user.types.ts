import { ThemeMode } from '@/shared/types';

export interface UserStateModel {
  id: string;
  name: string;
  email: string;
  currentThemeMode: ThemeMode;
}
