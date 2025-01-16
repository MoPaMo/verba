import { SignUpForm } from "./SignUpForm";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { GalleryVerticalEnd, Languages } from "lucide-react";

export default async function SignUpPage() {
  const session = await getServerSession();

  if (session) {
    redirect("/home");
  }

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="/" className="flex items-center gap-2 self-center font-medium">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Languages className="size-4" />
          </div>
          Verba
        </a>
        <SignUpForm />
      </div>
    </div>
  );
}
