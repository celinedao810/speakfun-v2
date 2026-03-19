import { mutationOptions } from '@tanstack/react-query'
import { adminLogin, loginWithEmail } from '#auth/services/login'

export function loginWithEmailMutation() {
  return mutationOptions({
    mutationFn: loginWithEmail,
  })
}

export function adminLoginMutation() {
  return mutationOptions({
    mutationFn: adminLogin,
  })
}
