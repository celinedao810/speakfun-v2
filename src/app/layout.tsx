import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { getTranslations } from 'next-intl/server'
import { getServerLocale } from '@/lib/i18n'
import { Providers } from '@/components/providers'
import { NextIntlClientProvider } from 'next-intl'

const fontSans = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
})

const fontMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('app.metadata')

  return {
    title: t('title'),
    description: t('description'),
    icons: {
      icon: [
        {
          media: '(prefers-color-scheme: light)',
          url: '/favicon-light.ico',
        },
        {
          media: '(prefers-color-scheme: dark)',
          url: '/favicon-dark.ico',
        },
      ],
    },
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  const locale = await getServerLocale()

  return (
    <html
      suppressHydrationWarning
      lang={locale}
      className={cn(
        'antialiased',
        fontMono.variable,
        'font-sans',
        fontSans.variable,
      )}
    >
      <body>
        <NextIntlClientProvider>
          <Providers>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
