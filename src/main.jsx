import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Supports weights 100-900
import '@fontsource-variable/montserrat';
// Supports weights 200-900
import '@fontsource-variable/cairo';
// Supports weights 100-800
import '@fontsource-variable/jetbrains-mono';
import '@fontsource/bebas-neue';

import global_en from './translations/en/global.json';
import global_es from './translations/es/global.json';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import { LanguageProvider } from './LanguageContext.jsx';


const userLanguage = navigator.language || navigator.userLanguage;
const defaultLanguage = userLanguage.split('-')[0];

i18next.init({
  interpolation: { escapeValue: false },
  lng: defaultLanguage,
  resources: {
    en: { global: global_en },
    es: { global: global_es },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </I18nextProvider>
  </React.StrictMode>
);
