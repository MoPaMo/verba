"use client";
import { Separator } from "@/components/ui/separator";
import { AICreditsProgress } from "@/components/ai-credits-progress";
import { BackButton } from "@/components/back-button";
import { usePathname } from "next/navigation";

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  const pathname = usePathname();
  const isSettingsPage = pathname === "/settings";

  return (
    <div className="container relative mx-auto max-w-4xl space-y-8 px-4 py-8 lg:px-8 lg:py-12">
      <div className="space-y-0.5">
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account settings and preferences.
        </p>
      </div>
      {isSettingsPage ? (
        <AICreditsProgress used={750} total={1000} daysLeft={7} />
      ) : (
        <BackButton />
      )}
      <Separator className="my-6" />
      {children}
    </div>
  );
}
