import { type EmailOtpType } from '@supabase/supabase-js'
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { LoginCard } from '#auth/components/login-card'
import { createClient } from '@/lib/supabase/server'
import { getTranslations } from 'next-intl/server'
import { MagicLinkAuthorize } from '#auth/components/magic-link-authorize'

const emailOtpTypes: EmailOtpType[] = ['email']

function isEmailOtpType(value: string): value is EmailOtpType {
  return emailOtpTypes.includes(value as EmailOtpType)
}

export async function MagicLinkConfirmPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const [t, brandingT, supabase] = await Promise.all([
    getTranslations('auth.magicLinkConfirm'),
    getTranslations('common.branding'),
    createClient(),
  ])

  const { token_hash: tokenHash, type: otpType } = await searchParams

  const hasInvalidType =
    otpType && typeof otpType === 'string' ? !isEmailOtpType(otpType) : false
  const hasInvalidHash = !(tokenHash && typeof tokenHash === 'string')
  const hasInvalidParams = hasInvalidType || hasInvalidHash

  let hasError = hasInvalidParams

  let accessToken = ''
  let refreshToken = ''

  if (!hasInvalidParams) {
    const { error, data } = await supabase.auth.verifyOtp({
      token_hash: tokenHash,
      type: otpType as EmailOtpType,
    })

    if (data) {
      accessToken = data.session?.access_token ?? ''
      refreshToken = data.session?.refresh_token ?? ''
    }

    hasError = !!error
  }

  return (
    <LoginCard
      className="w-fit max-w-fit"
      brandName={brandingT('name')}
      logoAlt={brandingT('logoAlt')}
    >
      <CardHeader className="text-center">
        <CardTitle className="text-xl">
          {hasError ? t('error.title') : t('success.title')}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <span className="px-4 whitespace-nowrap">
          {hasError ? t('error.brokenOrExpired') : t('success.description')}
        </span>
      </CardContent>
      {!hasError && (
        <MagicLinkAuthorize
          accessToken={accessToken}
          refreshToken={refreshToken}
        />
      )}
    </LoginCard>
  )
}
