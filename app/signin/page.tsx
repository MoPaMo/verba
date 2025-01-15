import { SignInForm } from '@/components/SignInForm'
import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'

export default async function SignInPage() {
  const session = await getServerSession()

  if (session) {
    redirect('/dashboard')
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-6 shadow-md">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Sign In</h2>
          <p className="mt-2 text-sm text-gray-600">
            Enter your credentials to access your account
          </p>
        </div>
        <SignInForm />
      </div>
    </div>
  )
}

