'use client'

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SignInForm } from './sign-in-form'
import { SignUpForm } from './sign-up-form'
import { ForgotPasswordForm } from './forgot-password-form'

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState('signin')

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#FAF8F6] dark:bg-[#2A2A3C] transition-colors duration-300">
      <div className="w-full max-w-md p-10">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#4A4A4A] dark:text-[#E5E3E0] mb-2">
            Welcome to Verba
          </h1>
          <p className="text-[#8C8C8C] dark:text-[#A09F9F]">
            Your journey to language mastery begins here
          </p>
        </div>

        <div className="bg-[#F5F2EF] dark:bg-[#363646] rounded-3xl p-8 shadow-lg shadow-black/5 dark:shadow-black/10 transition-all duration-300">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-2 mb-6">
              <TabsTrigger value="signin">Sign In</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>
            <TabsContent value="signin">
              <SignInForm onForgotPassword={() => setActiveTab('forgot')} />
            </TabsContent>
            <TabsContent value="signup">
              <SignUpForm />
            </TabsContent>
            <TabsContent value="forgot">
              <ForgotPasswordForm onBackToSignIn={() => setActiveTab('signin')} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

