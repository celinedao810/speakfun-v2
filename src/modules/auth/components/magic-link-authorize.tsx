'use client'

import { useEffect, useRef } from 'react'
import { supabase } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

type Props = {
  accessToken: string
  refreshToken: string
}

export function MagicLinkAuthorize({ accessToken, refreshToken }: Props) {
  const router = useRouter()
  const internalAccessToken = useRef(accessToken)
  const internalRefreshToken = useRef(refreshToken)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)
  useEffect(() => {
    void supabase.auth.setSession({
      access_token: internalAccessToken.current,
      refresh_token: internalRefreshToken.current,
    })
    timer.current = setTimeout(() => router.replace('/'), 2000)
    return () => {
      if (timer.current) clearTimeout(timer.current)
    }
  }, [router])

  return null
}
