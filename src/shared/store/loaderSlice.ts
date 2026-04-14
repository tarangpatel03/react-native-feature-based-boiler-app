import { createSlice } from '@reduxjs/toolkit';

type LoaderState = {
  loadingCount: number;
};

const initialState: LoaderState = {
  loadingCount: 0,
};

const loaderSlice = createSlice({
  name: 'LOADER',
  initialState,
  reducers: {
    showLoader: (state) => {
      state.loadingCount += 1;
    },
    hideLoader: (state) => {
      state.loadingCount = Math.max(0, state.loadingCount - 1);
    },
    resetLoader: (state) => {
      state.loadingCount = 0;
    },
  },
});

export const LoaderActions = loaderSlice.actions;
export default loaderSlice.reducer;
