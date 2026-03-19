import '@/shared/locales/i18n';
import { AppProvider, store } from '@/app';
import { Provider } from 'react-redux';
import AppBootstrap from '@/app/bootstrap/AppBootStrap';

function App() {
  return (
    <Provider store={store}>
      <AppProvider>
        <AppBootstrap />
      </AppProvider>
    </Provider>
  );
}

export default App;
