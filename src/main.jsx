import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { Toaster } from 'react-hot-toast';
import i18n from './Utils/i18n.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Toaster
      reverseOrder
      toastOptions={{
        duration: 5000,
        position: 'top-' + i18n.dir(),
        style: {
          background: 'var(--main-bg-color)',
          color: 'var(--text-color)',
          borderRadius: '4px',
          boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
          padding: '20px 40px',
          fontSize: '15px',
          maxWidth: 'fit-content',
        },
      }}
      containerClassName="toasterContainer"
    />
  </StrictMode>
);
