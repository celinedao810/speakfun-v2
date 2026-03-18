import Image from 'next/image'
import { PropsWithChildren } from 'react'
import { cn } from '@/lib/utils'
import { Card } from '@/components/ui/card'

type Props = PropsWithChildren<{
  className?: string
  brandName: string
  logoAlt: string
}>

export function LoginCard({ children, className, brandName, logoAlt }: Props) {
  return (
    <div className={cn('z-20 flex w-full max-w-sm flex-col gap-6', className)}>
      <div className="flex items-center gap-2 self-center font-medium">
        <div className="flex size-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
          <Image src="/logo.png" alt={logoAlt} width={24} height={24} />
        </div>
        {brandName}
      </div>
      <div className="flex flex-col gap-6">
        <Card className="bg-background">{children}</Card>
      </div>
    </div>
  )
}
