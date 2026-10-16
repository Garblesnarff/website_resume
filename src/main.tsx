import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource/big-shoulders-display/latin-700';
import '@fontsource/big-shoulders-display/latin-800';
import '@fontsource/big-shoulders-text/latin-600';
import '@fontsource/big-shoulders-text/latin-700';
import '@fontsource-variable/source-serif-4/opsz';
import '@fontsource-variable/source-serif-4/opsz-italic';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
