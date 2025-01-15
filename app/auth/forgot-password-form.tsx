'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Icons } from '@/app/auth/icons'
import { ArrowLeft } from 'lucide-react'

interface ForgotPasswordFormProps {
  onBackToSignIn: () => void
}

export function ForgotPasswordForm({ onBackToSignIn }: ForgotPasswordFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
    }, 3000)
  }

  return (
    <div className="space-y-6 animate-in">
      <Button
        variant="ghost"
        onClick={onBackToSignIn}
        className="mb-4 -ml-4 text-[#8C8C8C] dark:text-[#A09F9F] hover:text-[#7C956C] dark:hover:text-[#B3C4A5]"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Sign In
      </Button>

      {!isSubmitted ? (
        <>
          <div className="space-y-2 text-center">
            <h3 className="text-2xl font-semibold text-[#4A4A4A] dark:text-[#E5E3E0]">
              Forgot your password?
            </h3>
            <p className="text-[#8C8C8C] dark:text-[#A09F9F]">
              Enter your email address and we'll send you a link to reset your password.
            </p>
          </div>

          <form onSubmit={onSubmit} className="space-y-4">
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
            <Button 
              type="submit" 
              className="w-full bg-[#7C956C] hover:bg-[#6A8159] dark:bg-[#B3C4A5] dark:hover:bg-[#9FB38F] dark:text-[#2A2A3C] h-12 rounded-xl transition-all duration-300"
              disabled={isLoading}
            >
              {isLoading && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              )}
              Send Reset Link
            </Button>
          </form>
        </>
      ) : (
        <div className="space-y-4 text-center">
          <div className="w-16 h-16 rounded-full bg-[#7C956C] dark:bg-[#B3C4A5] mx-auto flex items-center justify-center">
            <Icons.check className="h-8 w-8 text-white dark:text-[#2A2A3C]" />
          </div>
          <h3 className="text-2xl font-semibold text-[#4A4A4A] dark:text-[#E5E3E0]">
            Check your email
          </h3>
          <p className="text-[#8C8C8C] dark:text-[#A09F9F]">
            We've sent you a password reset link. Please check your email.
          </p>
        </div>
      )}
    </div>
  )
}

