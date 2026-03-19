import { getRequestConfig } from 'next-intl/server'
import { getCookie, setCookie } from 'cookies-next/client'
import { cookies } from 'next/headers'

export default getRequestConfig(async () => {
  const locale = await getServerLocale()
  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  }
})

export const locales = ['en', 'vi'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale = 'en'
export const localeCookieName = 'locale'

export async function getServerLocale() {
  const store = await cookies()
  const locale = store.get(localeCookieName)?.value || defaultLocale
  if (!locales.includes(locale as Locale)) return defaultLocale
  return locale as Locale
}

export function getLocale() {
  const locale = getCookie(localeCookieName) || defaultLocale
  if (!locales.includes(locale as Locale)) return defaultLocale
  return locale as Locale
}

export function setLocale(locale: Locale) {
  setCookie(localeCookieName, locale, {
    maxAge: 60 * 60 * 24 * 30,
    path: '/',
  })
}
