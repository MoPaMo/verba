// app/settings/layout.tsx
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export default async function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  if (!session) {
    return redirect("/signin");
  }

  return <div className="settings-layout">{children}</div>;
}
