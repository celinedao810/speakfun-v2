import 'client-only'

import { supabase } from '@/lib/supabase/client'
import { AdminLogin, Login } from '#auth/types/login'

export async function loginWithEmail(payload: Login) {
  const { error } = await supabase.auth.signInWithOtp({
    email: payload.email,
  })
  if (error) throw error
}

export async function adminLogin(payload: AdminLogin) {
  const { error } = await supabase.auth.signInWithPassword({
    email: payload.email,
    password: payload.password,
  })
  if (error) throw error
}
