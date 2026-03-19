'use client'

import { Button } from '@/components/ui/button'
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { useForm } from '@tanstack/react-form'
import { adminLoginSchema } from '#auth/schemas/login'
import { AdminLogin } from '#auth/types/login'
import { useRouter } from 'next/navigation'
import {
  useCanFormSubmit,
  useIsFormSubmitting,
  useShouldHideFormErrors,
} from '@/hooks/forms'
import { useState } from 'react'
import { Alert, AlertTitle } from '@/components/ui/alert'
import { AlertCircleIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useMutation } from '@tanstack/react-query'
import { adminLoginMutation } from '#auth/mutations/login'

export function AdminLoginForm() {
  const t = useTranslations('auth.adminLogin')
  const commonButtons = useTranslations('common.buttons')
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const loginMutation = useMutation(adminLoginMutation())

  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    } as AdminLogin,
    validators: {
      onChange: adminLoginSchema,
      onMount: adminLoginSchema,
    },
    onSubmit: async ({ value }) => {
      try {
        await loginMutation.mutateAsync(value)
        router.push('/')
      } catch {
        setError(t('validation.invalidCredentials'))
      }
    },
  })
  const hideErrors = useShouldHideFormErrors(form)
  const isSubmitting = useIsFormSubmitting(form)
  const canSubmit = useCanFormSubmit(form)

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        void form.handleSubmit()
      }}
    >
      <FieldGroup>
        <form.Field name="email">
          {field => (
            <Field>
              <FieldLabel htmlFor="email">{t('form.labels.email')}</FieldLabel>
              <Input
                id="email"
                type="email"
                value={field.state.value}
                onChange={e => field.handleChange(e.target.value)}
                required
              />
              <FieldError
                hidden={hideErrors}
                errors={field.state.meta.errors}
              />
            </Field>
          )}
        </form.Field>
        <form.Field name="password">
          {field => (
            <Field>
              <FieldLabel htmlFor="password">
                {t('form.labels.password')}
              </FieldLabel>
              <Input
                id="password"
                type="password"
                value={field.state.value}
                onChange={e => field.handleChange(e.target.value)}
                required
              />
              <FieldError
                hidden={hideErrors}
                errors={field.state.meta.errors}
              />
            </Field>
          )}
        </form.Field>
        {error && (
          <Alert variant="destructive" className="max-w-md">
            <AlertCircleIcon />
            <AlertTitle>{error}</AlertTitle>
          </Alert>
        )}
        <Field>
          <Button
            disabled={!canSubmit}
            loading={isSubmitting || loginMutation.isSuccess}
            type="submit"
          >
            {commonButtons('login')}
          </Button>
        </Field>
      </FieldGroup>
    </form>
  )
}
