import  { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

// Custom hook para utilizar el contexto
export const useLanguage = () => useContext(LanguageContext);

// Proveedor de contexto
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('España'); // 'España' es el idioma predeterminado

  // Función para cambiar el idioma
  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  // Proporciona el idioma y la función para cambiarlo a los componentes hijos
  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
