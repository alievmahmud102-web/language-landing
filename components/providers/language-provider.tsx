"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { content } from "@/config/content";
import { defaultLocale, locales, type Locale } from "@/config/i18n";
import { getSeoByLocale, siteConfig } from "@/config/site";

type LanguageContextValue = {
  lang: Locale;
  setLang: (locale: Locale) => void;
  locales: readonly Locale[];
  content: (typeof content)[Locale];
};

const STORAGE_KEY = "site-language";

const LanguageContext = createContext<LanguageContextValue | null>(null);

function upsertMeta(
  selector: string,
  createAttrs: Record<string, string>,
  contentValue: string,
) {
  let tag = document.head.querySelector<HTMLMetaElement>(selector);

  if (!tag) {
    tag = document.createElement("meta");
    Object.entries(createAttrs).forEach(([key, value]) => {
      tag?.setAttribute(key, value);
    });
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", contentValue);
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Locale>(() => {
    if (typeof window === "undefined") return defaultLocale;

    const saved = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (saved && locales.includes(saved)) return saved;

    return defaultLocale;
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;

    const seo = getSeoByLocale(lang);
    document.title = `${seo.title} · ${siteConfig.name}`;

    upsertMeta('meta[name="description"]', { name: "description" }, seo.description);
    upsertMeta('meta[name="keywords"]', { name: "keywords" }, seo.keywords.join(", "));
    upsertMeta('meta[property="og:title"]', { property: "og:title" }, seo.title);
    upsertMeta(
      'meta[property="og:description"]',
      { property: "og:description" },
      seo.description,
    );
    upsertMeta('meta[property="og:locale"]', { property: "og:locale" }, lang === "ru" ? "ru_RU" : lang === "uz" ? "uz_UZ" : "en_US");
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title" }, seo.title);
    upsertMeta(
      'meta[name="twitter:description"]',
      { name: "twitter:description" },
      seo.description,
    );
  }, [lang]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      setLang: setLangState,
      locales,
      content: content[lang],
    }),
    [lang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}

