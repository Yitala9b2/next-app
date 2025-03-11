import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['ru', 'en'],
  localePrefix: 'as-needed', // или 'always', 'never'
  // Used when no locale matches
  localeDetection: false,
  defaultLocale: 'ru'
});
 
// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);