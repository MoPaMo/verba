import { SignUpForm } from "./SignUpForm";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export default async function SignUpPage() {
  const session = await getServerSession();

  if (session) {
    redirect("/home");
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FAF8F6] dark:bg-[#2A2A3C]">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-[#F5F2EF] p-6 shadow-md dark:bg-[#363646]">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-[#7C956C] dark:text-[#B3C4A5]">
            Create Account
          </h2>
          <p className="mt-2 text-sm text-[#8C8C8C] dark:text-[#A09F9F]">
            Enter your details to create a new account
          </p>
        </div>
        <SignUpForm />
      </div>
    </div>
  );
}
