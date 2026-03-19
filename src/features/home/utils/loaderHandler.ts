import { LoaderActions, store } from '@/app';

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
