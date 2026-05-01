import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { Footer, Header } from "@/components/layout";
import { LanguageProvider } from "@/components/providers/language-provider";
import { siteConfig } from "@/config/site";
import { themeConfig } from "@/config/theme";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.seo[siteConfig.defaultLocale].title,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.seo[siteConfig.defaultLocale].description,
  keywords: [...siteConfig.seo[siteConfig.defaultLocale].keywords],
  applicationName: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: siteConfig.url,
    title: siteConfig.seo[siteConfig.defaultLocale].title,
    description: siteConfig.seo[siteConfig.defaultLocale].description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.seo.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — курсы английского для детей и подростков`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo[siteConfig.defaultLocale].title,
    description: siteConfig.seo[siteConfig.defaultLocale].description,
    images: [siteConfig.seo.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: ["/favicon.svg"],
  },
};

/**
 * Root layout: global chrome (header/footer) and style entry.
 * Page-level layouts can nest under /app later (e.g. marketing vs. legal).
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const bodyClassName = `flex min-h-screen flex-col${themeConfig.darkMode ? " dark" : ""}`;

  return (
    <html lang={siteConfig.defaultLocale}>
      <body
        className={bodyClassName}
        style={
          {
            "--theme-primary": themeConfig.primaryColor,
            "--theme-secondary": themeConfig.secondaryColor,
            "--theme-font": themeConfig.font,
          } as CSSProperties
        }
      >
        <LanguageProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
