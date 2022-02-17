import React from 'react'
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './en.json';
import kan from './kan.json';

i18n.use(initReactI18next).init({
lng: 'en',
fallbackLng: 'en',
resources: {
	en: en,
	kan: kan,
},
interpolation: {
	escapeValue: false // react already safes from xss
}
});

export default i18n;
