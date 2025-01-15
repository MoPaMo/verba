'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { authenticate } from '@/actions/auth'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function SignInForm() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined)

  return (
    <form action={dispatch} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder="Enter your email"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          name="password"
          type="password"
          required
          placeholder="Enter your password"
        />
      </div>
      <SignInButton />
      {errorMessage && (
        <p className="text-sm text-red-500">{errorMessage}</p>
      )}
    </form>
  )
}

function SignInButton() {
  const { pending } = useFormStatus()

  return (
    <Button className="w-full" type="submit" disabled={pending}>
      {pending ? 'Signing In...' : 'Sign In'}
    </Button>
  )
}

