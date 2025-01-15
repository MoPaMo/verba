'use client'

import { signOut } from 'next-auth/react'
import { Button } from '@/components/ui/button'

export function SignOutButton() {
  const handleSignOut = async () => {
    await signOut({ callbackUrl: '/' })
  }

  return (
    <Button onClick={handleSignOut} variant="outline">
      Sign Out
    </Button>
  )
}

