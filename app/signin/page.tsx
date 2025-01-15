import { SignInForm } from "./SignInForm";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export default async function SignInPage() {
  const session = await getServerSession();

  if (session) {
    redirect("/home");
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-theme-background">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-theme-card p-6 shadow-md">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-theme-primary">
            Sign In
          </h2>
          <p className="mt-2 text-sm text-theme-secondary">
            Enter your credentials to access your account
          </p>
        </div>
        <SignInForm />
      </div>
    </div>
  );
}
