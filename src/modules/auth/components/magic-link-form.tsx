'use client'

import { Button } from '@/components/ui/button'
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/components/ui/input-otp'
import { useTranslations } from 'next-intl'
import { useForm } from '@tanstack/react-form'
import { Otp } from '#auth/types/login'
import { otpSchema } from '#auth/schemas/login'
import { useRouter } from 'next/navigation'
import { useMutation } from '@tanstack/react-query'
import { verifyOtpMutation } from '#auth/mutations/login'
import { useCanFormSubmit, useIsFormSubmitting } from '@/hooks/forms'
import { useState } from 'react'

export function MagicLinkForm({ email }: { email: string }) {
  const t = useTranslations('auth.magicLink')
  const commonButtons = useTranslations('common.buttons')
  const router = useRouter()
  const verifyMutation = useMutation(verifyOtpMutation())
  const [otpError, setOtpError] = useState<string | null>(null)

  const form = useForm({
    defaultValues: {
      email,
    } as Otp,
    validators: {
      onChange: otpSchema,
      onMount: otpSchema,
    },
    onSubmit: async ({ value }) => {
      try {
        await verifyMutation.mutateAsync(value)
        router.push('/')
      } catch {
        setOtpError(t('validation.invalidVerificationCode'))
      }
    },
  })

  const canSubmit = useCanFormSubmit(form)
  const isSubmitting = useIsFormSubmitting(form)

  const handleComplete = () => {
    if (otpError) return
    void form.handleSubmit()
  }

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        void form.handleSubmit()
      }}
    >
      <FieldGroup>
        {
          <form.Field name="otp">
            {field => (
              <Field>
                <FieldLabel htmlFor="verification-code">
                  {t('form.labels.verificationCode')}
                </FieldLabel>
                <InputOTP
                  value={field.state.value}
                  onChange={field.handleChange}
                  onComplete={handleComplete}
                  maxLength={8}
                  id="otp-verification"
                  required
                >
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
                <FieldError>{otpError}</FieldError>
              </Field>
            )}
          </form.Field>
        }
        <Button
          disabled={!canSubmit}
          loading={isSubmitting || verifyMutation.isSuccess}
          type="submit"
        >
          {commonButtons('verifyCode')}
        </Button>
      </FieldGroup>
    </form>
  )
}
