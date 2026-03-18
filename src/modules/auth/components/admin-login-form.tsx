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
import { adminLogin } from '#auth/services/login'
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

export function AdminLoginForm() {
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
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
        await adminLogin(value)
        router.push('/')
      } catch {
        setError('Invalid email or password')
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
              <FieldLabel htmlFor="email">Email</FieldLabel>
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
              <FieldLabel htmlFor="password">Password</FieldLabel>
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
          <Button disabled={!canSubmit} loading={isSubmitting} type="submit">
            Login
          </Button>
        </Field>
      </FieldGroup>
    </form>
  )
}
