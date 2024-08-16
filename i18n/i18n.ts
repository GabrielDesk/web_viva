import i18n, { KeyPrefix, NsByTOptions } from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

import { createInstance } from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { initReactI18next } from "react-i18next/initReactI18next";
import { getOptions } from "./settings";
import { BsKey } from "react-icons/bs";

const initI18next = async (lng: string, ns: string) => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(
      resourcesToBackend(
        (language: string, namespace: string) =>
          import(`./locales/${language}/${namespace}.json`)
      )
    )
    .init({
      ...getOptions(lng, ns),
      detection: {
        order: [
          "path",
          "cookie",
          "localStorage",
          "sessionStorage",
          "navigator",
        ],
        lookupFromPathIndex: 0, // Detecta o idioma a partir da URL (ex: /en)
        lookupCookie: "i18next",
        caches: ["cookie"],
      },
    });

  return i18nInstance;
};

interface IkeyOptions {
  keyPrefix: KeyPrefix<[]>;
}

export async function useTranslation(
  lng: string,
  ns: string,
  options: IkeyOptions
) {
  const i18nextInstance = await initI18next(lng, ns);
  return {
    t: i18nextInstance.getFixedT(
      lng,
      Array.isArray(ns) ? ns[0] : ns,
      options.keyPrefix
    ),
    i18n: i18nextInstance,
  };
}
