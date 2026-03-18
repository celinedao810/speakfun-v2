import { ReactNode } from 'react'

export const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center gap-6 bg-background p-6 md:p-10">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.2)_1px,transparent_0)] bg-size-[20px_20px] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(50,50,50,1)_1px,transparent_0)]" />
      {children}
    </div>
  )
}
