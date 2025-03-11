//import createMiddleware from "next-intl/middleware";
//import { locales, defaultLocale } from "@/lib/i18n";

//export const config = {
//  matcher: ["/",
//    "/((?!_next|.*\\..*).*)"
//    //"/(en|ru)/:path*"
//], // Middleware применяется ко ВСЕМ роутам, включая API
//};

//export default createMiddleware({
//  locales,
//  defaultLocale,
//  localePrefix: "as-needed", // Скрываем язык по умолчанию из URL
//});


//import createMiddleware from 'next-intl/middleware';
//import { locales, defaultLocale } from './lib/i18n';

//export default createMiddleware({
//    // Поддерживаемые локали
//    locales: locales,
  
//    // Дефолтная локаль
//    defaultLocale: defaultLocale,
  
//    // Если локаль не указана, перенаправлять на дефолтную
//    localePrefix: 'as-needed', // или 'always', 'never'
//  });
  
//  export const config = {
//    // Обрабатывать только маршруты с локалями
//    matcher: ['/', '/(ru|en)/:path*'],
//  };


import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
 
export default createMiddleware(routing);
 
export const config = {
  // Match only internationalized pathnames
  matcher: ["/((?!api|static|.*\\..*|_next).*)", '/(ru|en)/:path*']
};