"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

const languages = [
  { name: "French", nativeName: "Français", flag: "🇫🇷", code: "fr" },
  { name: "Spanish", nativeName: "Español", flag: "🇪🇸", code: "es" },
  { name: "Portuguese", nativeName: "Português", flag: "🇵🇹", code: "pt" },
  { name: "German", nativeName: "Deutsch", flag: "🇩🇪", code: "de" },
];

export default function LanguagePicker() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="min-h-screen bg-[#faf8f6] dark:bg-[#2a2a3c] p-6 flex flex-col items-center justify-center transition-colors duration-300">
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 text-[#6c6b6b] dark:text-[#c5c0bb] hover:text-[#4a4a4a] dark:hover:text-[#e5e3e0] hover:bg-[#f0ede9] dark:hover:bg-[#363646]"
        onClick={toggleTheme}
      >
        {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </Button>

      <Card className="w-full max-w-2xl p-8 bg-[#f5f2ef]/80 dark:bg-[#363646]/80 backdrop-blur-sm border-none shadow-lg dark:shadow-black/10">
        <h1 className="text-3xl font-bold text-center mb-8 text-[#7c956c] dark:text-[#b3c4a5]">
          I want to learn...
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {languages.map((language) => (
            <motion.div
              key={language.code}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="transition-transform duration-200"
            >
              <Button
                variant="outline"
                className="w-full h-auto p-6 bg-white/80 dark:bg-[#2a2a3c]/80 hover:bg-[#f0ede9] dark:hover:bg-[#363646] border-2 border-[#e5e3e0] dark:border-[#454558] hover:border-[#7c956c] dark:hover:border-[#b3c4a5] rounded-2xl transition-all duration-200 group"
              >
                <div className="flex flex-col items-center gap-3">
                  <span
                    className="text-4xl filter dark:brightness-95"
                    role="img"
                    aria-label={`${language.name} flag`}
                  >
                    {language.flag}
                  </span>
                  <div className="text-center">
                    <div className="font-bold text-xl text-[#4a4a4a] dark:text-[#e5e3e0] group-hover:text-[#7c956c] dark:group-hover:text-[#b3c4a5]">
                      {language.name}
                    </div>
                    <div className="text-sm text-[#8c8c8c] dark:text-[#a09f9f]">
                      {language.nativeName}
                    </div>
                  </div>
                </div>
              </Button>
            </motion.div>
          ))}
        </div>
      </Card>
    </div>
  );
}
