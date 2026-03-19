import { getLocale, Locale, setLocale } from '@/lib/i18n'
import { useCallback, useState } from 'react'
import { useRouter } from 'next/navigation'

export function useLocale() {
  const router = useRouter()
  const [internalLocal, setInternalLocale] = useState(getLocale())

  const handleSetLocale = useCallback(
    (locale: Locale) => {
      setLocale(locale)
      setInternalLocale(locale)
      router.refresh()
    },
    [router],
  )

  return {
    locale: internalLocal,
    setLocale: handleSetLocale,
  }
}
