/**
 * Global metadata and shared labels used by app chrome.
 */
export const siteConfig = {
  name: "Bright Future Language Center",
  description:
    "Языковой центр для детей и подростков в Ташкенте: разговорный английский, подготовка к IELTS, мини-группы и понятный прогресс для родителей.",
  locale: "ru" as const,
  url: "https://brightfuture.uz",
  seo: {
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
    ogImage: "/og-image.svg",
  },
  labels: {
    headerPlaceholder: "Template mode",
    footerPlaceholder: "Scalable config-driven foundation",
  },
} as const;

