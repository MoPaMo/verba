import { BackButton } from "@/components/back-button";

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <>
      <BackButton />
      {children}
    </>
  );
}
