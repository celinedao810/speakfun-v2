'use client'

import Image from 'next/image'
import { MagicLinkForm } from '#auth/components/magic-link-form'
import { useRouter } from 'next/navigation'
import { use, useEffect } from 'react'

export function MagicLinkPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const router = useRouter()
  const { email } = use(searchParams)
  useEffect(() => {
    if (!email || typeof email !== 'string') {
      router.replace('/login')
    }
  }, [email, router])

  if (!email || typeof email !== 'string') return

  return (
    <div className="z-20 flex w-full max-w-md flex-col gap-6">
      <div className="flex items-center gap-2 self-center font-medium">
        <div className="flex size-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
          <Image src="/logo.png" alt="Logo" width={24} height={24} />
        </div>
        Speakfun
      </div>
      <MagicLinkForm email={email as string} />
    </div>
  )
}
