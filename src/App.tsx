import { MantineProvider } from '@mantine/core';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Routes from './routes';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeContextProvider } from './contexts/ThemeContext';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import './styles/fonts.css';

function App() {
  return (
    <Provider store={store}>
      <MantineProvider
        theme={{
    fontFamily: 'Open Sans, Arial, sans-serif',
    headings: { fontFamily: 'Open Sans, Arial, sans-serif' },
  }}
      >
        <ThemeContextProvider>
          <AuthProvider>
            <Router>
              <Routes />
            </Router>
          </AuthProvider>
        </ThemeContextProvider>
      </MantineProvider>
    </Provider>
  );
}

export default App;