import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { persistor } from '@/app/store';
import { PersistGate } from 'redux-persist/integration/react';

type Props = {
  children: React.ReactNode;
};

const StoreProvider = ({ children }: Props) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </SafeAreaProvider>
  );
};

export default StoreProvider;
