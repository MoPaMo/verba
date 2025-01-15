'use client'

import { ErrorPage } from "@/components/error-page"

export default function Error() {
  return (
    <ErrorPage 
      title="Something Went Wrong"
      message="Don't worry! These things happen sometimes. Let's try that again!"
      emoji="🌱"
    />
  )
}

