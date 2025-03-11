import { ReactNode } from 'react';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { notFound } from 'next/navigation';
//import { locales, getTranslations } from '@/src/lib/i18n';
import Header from '@/src/components/Header';
import {getMessages} from 'next-intl/server';
import { Locale } from '@/src/types/locales';
import '../globals.css';
import { Metadata } from 'next';
//import seoData from '@/src/lib/seo'; // Импортируем SEO-данные
import {routing} from '@/src/i18n/routing';
import {getTranslations} from 'next-intl/server';
type Props = {
    children: ReactNode;
    params: {
        locale: Locale;
    };
};

type SeoParams = Promise<{ locale: Locale }>;


export async function generateMetadata(props: { params: SeoParams }): Promise<Metadata> {
    const params = await props.params;
    const { locale } = params;

    const t = await getTranslations({locale, namespace: 'seo'});
    return {
      title: t('title'),
      description: t('description'),
      alternates: {
        canonical: `/${locale}`,
        languages: {
          en: "/en",
          ru: "/ru",
        },
      },
      openGraph: {
        title: t('title'),
        description: t('description'),
        url: `/${locale}`,
        siteName: "My Blog",
        type: "website",
      },
    };
  };
  

export default async function LocaleLayout({ children, params }: Props) {
    const locale = (await params).locale

    if (!routing.locales.includes(locale)) {
        notFound();
    }

    const messages = await getMessages();

    return (
        <html lang={locale}>
            {/* Устанавливаем локаль для html */}
            <body>
                <NextIntlClientProvider
                    locale={locale}
                    messages={messages}
                >
                    <Header />
                    <main>{children}</main>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
