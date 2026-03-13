import { LoginForm } from '#auth/components/login-form'
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

export function LoginPage() {
  return (
    <Background className="flex flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="z-20 flex w-full max-w-sm flex-col gap-6">
        <div className="flex items-center gap-2 self-center font-medium">
          <div className="flex size-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Image src="/logo.png" alt="Logo" width={24} height={24} />
          </div>
          Speakfun
        </div>
        <LoginForm />
      </div>
    </Background>
  )
}

const Background = ({
  children,
  className,
}: {
  children: ReactNode
  className: string
}) => {
  return (
    <div
      className={cn('relative min-h-screen w-full bg-background', className)}
    >
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.2)_1px,transparent_0)] bg-size-[20px_20px] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(50,50,50,1)_1px,transparent_0)]" />
      {children}
    </div>
  )
}
