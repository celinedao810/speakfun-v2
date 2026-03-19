'use client'

import { MagicLinkForm } from '#auth/components/magic-link-form'
import { useRouter } from 'next/navigation'
import { use, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { LoginCard } from '#auth/components/login-card'
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function MagicLinkPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const t = useTranslations('auth.magicLink.page')
  const brandingT = useTranslations('common.branding')
  const router = useRouter()
  const { email } = use(searchParams)
  useEffect(() => {
    if (!email || typeof email !== 'string') {
      router.replace('/login')
    }
  }, [email, router])

  if (!email || typeof email !== 'string') return

  return (
    <LoginCard
      className="max-w-md"
      brandName={brandingT('name')}
      logoAlt={brandingT('logoAlt')}
    >
      <CardHeader className="text-center">
        <CardTitle className="text-xl">{t('title')}</CardTitle>
        <CardDescription>{t('description', { email })}</CardDescription>
      </CardHeader>
      <CardContent>
        <MagicLinkForm email={email} />
      </CardContent>
    </LoginCard>
  )
}
