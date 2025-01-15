'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Icons } from '@/app/auth/icons'

export function SignUpForm() {
  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    setIsLoading(true);
  
    const formData = new FormData(event.currentTarget as HTMLFormElement);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
  
    const res = await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });
  
    setIsLoading(false);
  
    if (res.ok) {
      const data = await res.json();
      // Handle successful account creation (e.g., redirect or show a message)
      console.log("Account created successfully:", data);
    } else {
      // Handle error (e.g., show a message to the user)
      console.error("Error creating account");
    }
  }
  

  return (
    <div className="space-y-6 animate-in">
      <form onSubmit={onSubmit} className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            placeholder="John Doe"
            type="text"
            autoCapitalize="words"
            autoComplete="name"
            autoCorrect="off"
            disabled={isLoading}
            required
          />
        </div>
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
          Create Account
        </Button>
      </form>
    </div>
  )
}

