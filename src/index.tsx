// Static imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
// Dynamic imports
import './index.scss';
import App from "./App"
import { RootState, store } from "./store"

const root: ReactDOM.Root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store as RootState}>
      <App />
    </Provider>
  </React.StrictMode>
);
