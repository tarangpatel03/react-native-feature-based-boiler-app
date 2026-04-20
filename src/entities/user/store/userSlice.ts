import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserStateModel } from '@/entities/user';
import { ThemeModeOptions } from '@/shared/types';

const initialState: UserStateModel = {
  id: '',
  name: '',
  email: '',
  currentThemeMode: ThemeModeOptions.Light,
};

export const UserSlice = createSlice({
  initialState: initialState,
  name: 'USER',
  reducers: {
    setUserData(state, action: PayloadAction<Partial<UserStateModel>>) {
      return { ...state, ...action.payload };
    },
    clearUserData() {
      return initialState;
    },
  },
});

export const UserActions = UserSlice.actions;
export default UserSlice.reducer;
