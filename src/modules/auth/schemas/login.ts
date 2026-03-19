import { z } from 'zod'

export const loginSchema = z.object({ email: z.email() })

export const adminLoginSchema = z.object({
  email: z.email(),
  password: z.string().min(6),
})

export const otpSchema = loginSchema.extend({ otp: z.string().length(8) })
