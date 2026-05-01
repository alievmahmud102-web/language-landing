import { defaultLocale, type Locale } from "@/config/i18n";

/**
 * Global metadata and shared labels used by app chrome.
 */
export const siteConfig = {
  name: "Bright Future Language Center",
  description:
    "Языковой центр для детей и подростков в Ташкенте: разговорный английский, подготовка к IELTS, мини-группы и понятный прогресс для родителей.",
  defaultLocale,
  url: "https://brightfuture.uz",
  seo: {
    ru: {
      title: "Языковой центр для детей и подростков в Ташкенте",
      description:
        "Английский для детей и подростков: мини-группы, ежемесячный прогресс, подготовка к IELTS и пробный урок. Помогаем ребенку говорить уверенно.",
      keywords: [
        "английский для детей",
        "английский для подростков",
        "языковая школа ташкент",
        "подготовка к IELTS",
        "пробный урок английского",
        "курсы английского ташкент",
      ],
    },
    en: {
      title: "English Language Center for Kids and Teens in Tashkent",
      description:
        "English courses for children and teens: small groups, monthly progress updates, IELTS preparation, and trial lessons.",
      keywords: [
        "english for kids",
        "english for teens",
        "language school tashkent",
        "ielts preparation",
        "trial english lesson",
        "english courses tashkent",
      ],
    },
    uz: {
      title: "Toshkentda bolalar va o'smirlar uchun ingliz tili markazi",
      description:
        "Bolalar va o'smirlar uchun ingliz tili kurslari: kichik guruhlar, oyma-oy rivojlanish hisobotlari, IELTS tayyorlov va sinov darsi.",
      keywords: [
        "bolalar uchun ingliz tili",
        "o'smirlar uchun ingliz tili",
        "toshkent til markazi",
        "ielts tayyorlov",
        "sinov darsi ingliz",
        "ingliz tili kurslari toshkent",
      ],
    },
    ogImage: "/og-image.svg",
  },
  labels: {
    headerPlaceholder: {
      ru: "Режим шаблона",
      en: "Template mode",
      uz: "Shablon rejimi",
    },
    footerPlaceholder: {
      ru: "Масштабируемая конфигурация",
      en: "Scalable config-driven foundation",
      uz: "Masshtablanadigan konfiguratsiya",
    },
  },
} as const;

export function getSeoByLocale(locale: Locale) {
  return siteConfig.seo[locale];
}

