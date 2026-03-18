import { AnyFormApi, useStore } from '@tanstack/react-form'

export function useShouldHideFormErrors(form: AnyFormApi) {
  const submissionAttempts = useStore(
    form.store,
    state => state.submissionAttempts,
  )
  return submissionAttempts < 1
}

export function useIsFormSubmitting(form: AnyFormApi) {
  return useStore(form.store, state => state.isSubmitting)
}

export function useCanFormSubmit(form: AnyFormApi) {
  const canSubmit = useStore(form.store, state => state.canSubmit)
  const isTouched = useStore(form.store, state => state.isTouched)
  return canSubmit && isTouched
}
