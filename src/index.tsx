// Static imports
import React from 'react';
import ReactDOM from 'react-dom/client';
// Dynamic imports
import './index.scss';
import App from "./App"

const root: ReactDOM.Root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
