import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enLocale from "./en.json";
import zhLocale from "./zh.json";
import zhHant from "./zh-Hant.json";
import esLocale from "./es.json";
import jpLocale from "./jp.json";
import deLocale from "./de.json";
import thLocale from "./th.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enLocale,
    },
    zh: {
      translation: zhLocale,
    },
    zhHant: {
      translation: zhHant,
    },
    es: {
      translation: esLocale,
    },
    jp: {
      translation: jpLocale,
    },
    de: {
      translation: deLocale,
    },
    th: {
      translation: thLocale,
    },
  },
  fallbackLng: "en",
});

export default i18n;
