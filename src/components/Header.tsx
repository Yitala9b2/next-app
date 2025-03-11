'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

export default function Header() {
    const t = useTranslations('header');
      
    

    const pathname = usePathname();
    return (
        <header
            style={{
                padding: '1rem',

            }}
        >
            <h1>{t('home')}</h1>
            <nav>
                <Link href="/" style={{ marginRight: '1rem' }}>
                    Home
                </Link>
                <Link href="/en" style={{ marginRight: '1rem' }}>
                    en
                </Link>
                {/* Кнопка для переключения на русский язык */}
                <Link href="/ru">ru</Link>
                {/*{locales.map((locale) => (
                    <Link
                        key={locale}
                        href={`/${locale}${pathname.replace(/^\/(en|ru)/, '')}`}
                        style={{ marginRight: '1rem' }}
                    >
                        {locale.toUpperCase()}
                    </Link>
                ))}*/}
            </nav>
        </header>
    );
}
