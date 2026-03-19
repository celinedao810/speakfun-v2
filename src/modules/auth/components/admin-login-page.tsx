import { LoginCard } from '#auth/components/login-card'
import { AdminLoginForm } from '#auth/components/admin-login-form'
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { getTranslations } from 'next-intl/server'

export async function AdminLoginPage() {
  const t = await getTranslations('auth.adminLogin')
  const commonBranding = await getTranslations('common.branding')

  return (
    <LoginCard
      brandName={commonBranding('name')}
      logoAlt={commonBranding('logoAlt')}
    >
      <CardHeader className="text-center">
        <CardTitle className="text-xl">{t('page.title')}</CardTitle>
        <CardDescription>{t('page.description')}</CardDescription>
      </CardHeader>
      <CardContent>
        <AdminLoginForm />
      </CardContent>
    </LoginCard>
  )
}
