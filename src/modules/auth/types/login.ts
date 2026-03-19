import { z } from 'zod'
import { adminLoginSchema, loginSchema, otpSchema } from '#auth/schemas/login'

export type Login = z.infer<typeof loginSchema>

export type AdminLogin = z.infer<typeof adminLoginSchema>

export type Otp = z.infer<typeof otpSchema>
