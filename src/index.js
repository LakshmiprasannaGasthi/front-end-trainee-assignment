import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { WidgetProvider } from './context/WidgetContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WidgetProvider>
      <App />
    </WidgetProvider>
  </React.StrictMode>
);
