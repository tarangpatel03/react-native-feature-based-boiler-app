import { ThemeMode } from '@/shared';

export interface UserStateModel {
  id: string;
  name: string;
  email: string;
  currentThemeMode: ThemeMode;
}
