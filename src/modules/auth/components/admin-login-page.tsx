import { LoginCard } from '#auth/components/login-card'
import { AdminLoginForm } from '#auth/components/admin-login-form'
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function AdminLoginPage() {
  return (
    <LoginCard>
      <CardHeader className="text-center">
        <CardTitle className="text-xl">Welcome back, admin!</CardTitle>
        <CardDescription>Login with root account</CardDescription>
      </CardHeader>
      <CardContent>
        <AdminLoginForm />
      </CardContent>
    </LoginCard>
  )
}
