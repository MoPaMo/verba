"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const languages = [
  { name: "French", nativeName: "Français", flag: "🇫🇷", code: "fr" },
  { name: "Spanish", nativeName: "Español", flag: "🇪🇸", code: "es" },
  { name: "Portuguese", nativeName: "Português", flag: "🇵🇹", code: "pt" },
  { name: "German", nativeName: "Deutsch", flag: "🇩🇪", code: "de" },
];

export default function LanguagePicker() {
  return (
    <div className="p-6 flex flex-col items-center justify-center">
      <Card className="w-full max-w-md p-8">
        <h1 className="text-2xl font-bold mb-4">I want to learn...</h1>
        <div>
          {languages.map((language) => (
            <Button key={language.code} className="m-2">
              {language.flag} {language.name}
            </Button>
          ))}
        </div>
      </Card>
    </div>
  );
}
