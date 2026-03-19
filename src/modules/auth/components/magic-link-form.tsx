'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/components/ui/input-otp'
import { useTranslations } from 'next-intl'

export function MagicLinkForm({ email }: { email: string }) {
  const t = useTranslations('auth.magicLink')
  const commonButtons = useTranslations('common.buttons')

  return (
    <Card className="bg-background">
      <CardHeader className="text-center">
        <CardTitle className="text-xl">{t('page.title')}</CardTitle>
        <CardDescription>{t('page.description', { email })}</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="verification-code">
                {t('form.labels.verificationCode')}
              </FieldLabel>
              <InputOTP maxLength={8} id="otp-verification" required>
                <InputOTPGroup className="*:data-[slot=input-otp-slot]:h-12.5 *:data-[slot=input-otp-slot]:w-12.5 *:data-[slot=input-otp-slot]:text-xl">
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup className="*:data-[slot=input-otp-slot]:h-12.5 *:data-[slot=input-otp-slot]:w-12.5 *:data-[slot=input-otp-slot]:text-xl">
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                  <InputOTPSlot index={6} />
                  <InputOTPSlot index={7} />
                </InputOTPGroup>
              </InputOTP>
            </Field>
            <Field>
              <Button type="submit">{commonButtons('verifyCode')}</Button>
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
