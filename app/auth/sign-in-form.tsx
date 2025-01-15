'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Icons } from '@/app/auth/icons'

interface SignInFormProps {
  onForgotPassword: () => void
}

export function SignInForm({ onForgotPassword }: SignInFormProps) {
  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  return (
    <div className="space-y-6 animate-in">
      <form onSubmit={onSubmit} className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            placeholder="hello@verba.com"
            type="email"
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect="off"
            disabled={isLoading}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            disabled={isLoading}
            required
          />
        </div>
        <Button 
          type="submit" 
          className="w-full bg-[#7C956C] hover:bg-[#6A8159] dark:bg-[#B3C4A5] dark:hover:bg-[#9FB38F] dark:text-[#2A2A3C] h-12 rounded-xl transition-all duration-300"
          disabled={isLoading}
        >
          {isLoading && (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          )}
          Sign In
        </Button>
      </form>

      <Button
        variant="link"
        onClick={onForgotPassword}
        className="w-full text-[#8C8C8C] dark:text-[#A09F9F] hover:text-[#7C956C] dark:hover:text-[#B3C4A5]"
        disabled={isLoading}
      >
        Forgot your password?
      </Button>
    </div>
  )
}

