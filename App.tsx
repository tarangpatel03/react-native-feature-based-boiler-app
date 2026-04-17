import '@/shared/i18n/i18n';
import { Provider } from 'react-redux';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { store } from '@/app/store';
import { AppProvider } from '@/app/providers';
import { AppBootstrap } from '@/app/bootstrap';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';

function App() {
  return (
    <Provider store={store}>
      <AppProvider>
        <GestureHandlerRootView style={styles.container}>
          <BottomSheetModalProvider>
            <AppBootstrap />
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      </AppProvider>
    </Provider>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
