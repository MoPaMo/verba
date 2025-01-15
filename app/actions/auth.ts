'use server'

import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    if (!email || !password) {
      return 'Please provide both email and password.'
    }

    const user = await prisma.user.findUnique({ where: { email } })

    if (!user) {
      return 'User not found.'
    }

    const passwordMatch = await bcrypt.compare(password, user.password)

    if (!passwordMatch) {
      return 'Invalid password.'
    }

    return undefined 
  } catch (error) {
    console.error('Authentication error:', error)
    return 'An error occurred during authentication.'
  }
}

export async function handleSignOut() {
}