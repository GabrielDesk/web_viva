"use client";
import { useEffect, useState } from "react";
import i18next from "i18next";
import {
  initReactI18next,
  useTranslation as useTranslationOrg,
} from "react-i18next";
import { useCookies } from "react-cookie";
import resourcesToBackend from "i18next-resources-to-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { getOptions, languages, cookieName } from "./settings";

const runsOnServerSide = typeof window === "undefined";

//
i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(
    resourcesToBackend(
      (language: string, namespace: string) =>
        import(`./locales/${language}/${namespace}.json`)
    )
  )
  .init({
    ...getOptions(),
    detection: {
      order: ["path", "htmlTag", "cookie", "navigator"],
    },
    interpolation: {
      escapeValue: false,
    },
    preload: runsOnServerSide ? languages : [],
    debug: true,
  });

export function useTranslation(lng: string, ns: string, options?: object) {
  const [cookies, setCookie] = useCookies([cookieName]);
  const ret = useTranslationOrg(ns, options);
  const { i18n } = ret;

  if (runsOnServerSide && lng && i18n.resolvedLanguage !== lng) {
    // i18n.changeLanguage(lng).catch((err) => console.error(err));
    i18n.changeLanguage(lng);
  } else {
    const [activeLng, setActiveLng] = useState(i18n.resolvedLanguage);

    useEffect(() => {
      if (activeLng === i18n.resolvedLanguage) return;
      setActiveLng(i18n.resolvedLanguage);
    }, [activeLng, i18n.resolvedLanguage]);

    useEffect(() => {
      if (!lng || typeof lng !== "string") {
        console.error("Invalid language code:", lng);
        return;
      }

      if (i18n.resolvedLanguage !== lng) {
        i18n.changeLanguage(lng).catch((err) => {
          console.error("Error changing language:", err);
        });
      }
    }, [lng, i18n]);

    useEffect(() => {
      if (cookies.i18next === lng) return;
      setCookie(cookieName, lng, { path: "/" });
    }, [lng, cookies.i18next]);
  }
  return ret;
}
