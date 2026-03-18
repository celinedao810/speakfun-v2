import { z } from 'zod'
import { adminLoginSchema, loginSchema } from '#auth/schemas/login'

export type Login = z.infer<typeof loginSchema>

export type AdminLogin = z.infer<typeof adminLoginSchema>
