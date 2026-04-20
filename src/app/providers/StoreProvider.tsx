import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { persistor } from '@/app/store';
import { PersistGate } from 'redux-persist/integration/react';
import { useEffect } from 'react';
import { setToastBottomInset } from '@/shared/toast';

type Props = {
  children: React.ReactNode;
};

const ToastInsetSync = () => {
  const insets = useSafeAreaInsets();

  useEffect(() => {
    setToastBottomInset(insets.bottom);
  }, [insets.bottom]);

  return null;
};

const StoreProvider = ({ children }: Props) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <ToastInsetSync />
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </SafeAreaProvider>
  );
};

export default StoreProvider;
