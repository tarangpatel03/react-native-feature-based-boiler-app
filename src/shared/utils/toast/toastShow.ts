import { normalize } from '@/shared/utils';
import Toast from 'react-native-toast-message';

export const showSuccessToast = (message: string) => {
  Toast.show({
    type: 'success',
    text1: message,
    avoidKeyboard: false,
    visibilityTime: 1500,
    position: 'bottom',
    text1Style: {
      fontWeight: 400,
      fontSize: normalize(16),
    },
  });
};

export const showErrorToast = (message: string) => {
  Toast.show({
    type: 'error',
    text1: message,
    avoidKeyboard: false,
    visibilityTime: 1500,
    position: 'bottom',
    text1Style: {
      fontWeight: 400,
      fontSize: normalize(16),
    },
  });
};
