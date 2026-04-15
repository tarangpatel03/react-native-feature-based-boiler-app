import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthStateModel } from '@/features/auth';

const initialState: AuthStateModel = {
  id: '',
  email: '',
  accessToken: '',
};

export const AuthSlice = createSlice({
  initialState: initialState,
  name: 'AUTH',
  reducers: {
    setAccessToken(state, action: PayloadAction<string>) {
      state.accessToken = action.payload;
    },
    setUser(state, action: PayloadAction<Partial<AuthStateModel>>) {
      return { ...state, ...action.payload };
    },
    clearUser() {
      return initialState;
    },
  },
});

export const AuthActions = AuthSlice.actions;
export default AuthSlice.reducer;
