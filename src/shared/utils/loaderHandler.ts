import { store } from '@/app';
import { LoaderActions } from '../store/loaderSlice';

const showLoader = () => {
  store.dispatch(LoaderActions.showLoader());
};

const hideLoader = () => {
  store.dispatch(LoaderActions.hideLoader());
};

export const LoaderHandler = {
  showLoader,
  hideLoader,
};
