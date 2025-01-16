"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icons } from "./icons";
import { useSearchParams, useRouter } from "next/navigation";

export function SignInForm() {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    // Get the callback URL from the search parameters, default to /home
    const callbackUrl = searchParams.get("callbackUrl") || "/home";

    const response = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    setLoading(false);

    if (response?.error) {
      setErrorMessage(response.error);
    } else {
      // Successful sign-in, redirect to the callback URL
      router.push(callbackUrl);
      router.refresh();
    }
  };

  const handleForgotPassword = () => {
    // TODO: Implement forgot password functionality
  };

  return (
    <div className="space-y-6 animate-in">
      <form onSubmit={handleSubmit} className="space-y-5">
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
        <Button
          type="submit"
          className="w-full bg-[#7C956C] hover:bg-[#6A8159] dark:bg-[#B3C4A5] dark:hover:bg-[#9FB38F] dark:text-[#2A2A3C] h-12 rounded-xl transition-all duration-300"
          disabled={loading}
        >
          {loading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
          Sign In
        </Button>
      </form>

      <Button
        variant="link"
        onClick={handleForgotPassword}
        className="w-full text-[#8C8C8C] dark:text-[#A09F9F] hover:text-[#7C956C] dark:hover:text-[#B3C4A5]"
        disabled={loading}
      >
        Forgot your password?
      </Button>

      {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}
    </div>
  );
}
