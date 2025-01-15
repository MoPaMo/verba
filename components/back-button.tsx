"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft } from 'lucide-react'
import { useRouter } from "next/navigation"

interface BackButtonProps {
  label?: string
}

export function BackButton({ label = "Back" }: BackButtonProps) {
  const router = useRouter()

  return (
    <Button
      variant="ghost"
      onClick={() => router.back()}
      className="gap-2 pl-0 text-muted-foreground transition-colors hover:text-foreground"
    >
      <ChevronLeft className="h-4 w-4" />
      {label}
    </Button>
  )
}

