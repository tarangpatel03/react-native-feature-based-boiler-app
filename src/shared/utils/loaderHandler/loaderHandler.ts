import { store } from '@/app/store';
import { LoaderActions } from '@/shared/store';

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
