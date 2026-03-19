import '@/shared/locales/i18n';
import { AppProvider, RootNavigation, store } from '@/app';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <AppProvider>
        <RootNavigation />
      </AppProvider>
    </Provider>
  );
}

export default App;
