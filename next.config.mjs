//import type { NextConfig } from 'next';

//const nextConfig: NextConfig = {
//    //i18n: {
//    //    locales: ['en', 'ru'], // Список поддерживаемых языков
//    //    defaultLocale: 'ru', // Язык по умолчанию (скроем его в URL)
//    //    localeDetection: false, // Отключаем автоопределение языка браузером
//    //},
//    reactStrictMode: false, // Включает строгий режим React
//    // Используем SWC-минимизацию для ускорения загрузки страниц
//    async headers() {
//        return [
//            {
//                source: '/:path*',
//                headers: [
//                    {
//                        key: 'X-Frame-Options',
//                        value: 'DENY',
//                    },
//                    {
//                        key: 'X-Content-Type-Options',
//                        value: 'nosniff',
//                    },
//                ],
//            },
//        ];
//    },
//};

//export default nextConfig;

import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {};
 
export default withNextIntl(nextConfig);