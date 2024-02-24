// i18n.js
import i18n from 'i18next'; // Import the i18next library
import { initReactI18next } from 'react-i18next'; // Import the react-i18next initialization function
import enTranslation from './locales/en.json'; // Import English translations
import esTranslation from './locales/es.json'; // Import Spanish translations

// Initialize i18next
i18n
  .use(initReactI18next) // Use the react-i18next initialization function
  .init({
    resources: {
      en: { translation: enTranslation }, // Set English translations
      es: { translation: esTranslation }  // Set Spanish translations
    },
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language
    interpolation: {
      escapeValue: false // Not needed for React
    }
  });

export default i18n; // Export the initialized i18n object
