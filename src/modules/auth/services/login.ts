import 'client-only'

import { supabase } from '@/lib/supabase/client'
import { AdminLogin, Login, Otp } from '#auth/types/login'

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

export async function verifyOtp(payload: Otp) {
  const { error } = await supabase.auth.verifyOtp({
    type: 'email',
    token: payload.otp,
    email: payload.email,
  })
  if (error) throw error
}
