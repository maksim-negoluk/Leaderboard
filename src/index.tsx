import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './components/App';
import GlobalStyles from './globalStyles';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <GlobalStyles />
    <App />
  </Provider>
  // </React.StrictMode>
);
