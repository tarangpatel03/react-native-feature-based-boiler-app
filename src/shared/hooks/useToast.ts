import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import { normalize } from '@/shared/utils';

export const useToast = () => {
  const insets = useSafeAreaInsets();

  const showSuccessToast = (message: string) => {
    Toast.show({
      type: 'success',
      text1: message,
      position: 'bottom',
      bottomOffset: insets.bottom + 16,
      visibilityTime: 1500,
      text1Style: {
        fontWeight: '400',
        fontSize: normalize(16),
      },
    });
  };

  const showInfoToast = (message: string) => {
    Toast.show({
      type: 'info',
      text1: message,
      position: 'bottom',
      bottomOffset: insets.bottom + 16,
      visibilityTime: 1500,
      text1Style: {
        fontWeight: '400',
        fontSize: normalize(16),
      },
    });
  };

  const showErrorToast = (message: string) => {
    Toast.show({
      type: 'error',
      text1: message,
      position: 'bottom',
      bottomOffset: insets.bottom + 16,
      visibilityTime: 1500,
      text1Style: {
        fontWeight: '400',
        fontSize: normalize(16),
      },
    });
  };

  return {
    showSuccessToast,
    showInfoToast,
    showErrorToast,
  };
};
