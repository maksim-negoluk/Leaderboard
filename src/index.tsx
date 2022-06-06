import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './components/App';
import GlobalStyles from './globalStyles';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <App />
    </Provider>
  </React.StrictMode>
);

// Todo:
//  3.Maybe add place to see single user max score
//  4.try to refactor file structure (try to extract shared components)
//  5.refactor code
