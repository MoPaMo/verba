"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icons } from "../signin/icons";
import { createAccount } from "@/app/actions/signup";
import Link from "next/link";

export function SignUpForm() {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    const formData = new FormData(e.currentTarget);
    const result = await createAccount(formData);

    if (result.error) {
      setErrorMessage(result.error);
      setLoading(false);
      return;
    }

    // If signup was successful, automatically sign in
    const signInResult = await signIn("credentials", {
      redirect: false,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    });

    if (signInResult?.error) {
      setErrorMessage(
        "Account created but could not sign in automatically. Please sign in manually."
      );
    }

    setLoading(false);

    if (!signInResult?.error) {
      window.location.href = "/home";
    }
  };

  return (
    <div className="space-y-6 animate-in">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="John Doe"
            type="text"
            autoCapitalize="words"
            autoComplete="name"
            autoCorrect="off"
            disabled={loading}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            placeholder="hello@verba.com"
            type="email"
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect="off"
            disabled={loading}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            disabled={loading}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="masterPassword">Master Password</Label>
          <Input
            id="masterPassword"
            name="masterPassword"
            type="password"
            disabled={loading}
            required
          />
          <p className="text-xs text-[#8C8C8C] dark:text-[#A09F9F]">
            Required for account creation
          </p>
        </div>
        <Button
          type="submit"
          className="w-full bg-[#7C956C] hover:bg-[#6A8159] dark:bg-[#B3C4A5] dark:hover:bg-[#9FB38F] dark:text-[#2A2A3C] h-12 rounded-xl transition-all duration-300"
          disabled={loading}
        >
          {loading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
          Create Account
        </Button>
      </form>

      <div className="text-center text-sm">
        <span className="text-[#8C8C8C] dark:text-[#A09F9F]">
          Already have an account?{" "}
        </span>
        <Link
          href="/signin"
          className="text-[#7C956C] hover:text-[#6A8159] dark:text-[#B3C4A5] dark:hover:text-[#9FB38F] transition-colors duration-300"
        >
          Sign In
        </Link>
      </div>

      {errorMessage && (
        <p className="text-sm text-red-500 text-center">{errorMessage}</p>
      )}
    </div>
  );
}
