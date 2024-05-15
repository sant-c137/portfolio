import { createContext, useState, useEffect } from 'react';
import i18next from 'i18next';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(i18next.language);

  useEffect(() => {
    // Suscribirse a los cambios de idioma de i18next
    const subscription = i18next.on('languageChanged', (lng) => {
      setLanguage(lng);
    });

    // Limpiar la suscripción cuando se desmonte el componente
    return () => subscription.off('languageChanged');
  }, []);

  const handleChangeLanguage = (lng) => {
    i18next.changeLanguage(lng);
  };

  return (
    <LanguageContext.Provider value={{ language, handleChangeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
