"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const languages = [
  {
    name: "French",
    nativeName: "Français",
    flag: "🇫🇷",
    code: "fr",
    disabled: true,
  },
  {
    name: "Spanish",
    nativeName: "Español",
    flag: "🇪🇸",
    code: "es",
    disabled: true,
  },
  {
    name: "Portuguese",
    nativeName: "Português",
    flag: "🇧🇷",
    code: "pt",
    disabled: false,
  },
  {
    name: "German",
    nativeName: "Deutsch",
    flag: "🇩🇪",
    code: "de",
    disabled: false,
  },
  {
    name: "Italian",
    nativeName: "Italiano",
    flag: "🇮🇹",
    code: "it",
    disabled: true,
  },
  {
    name: "Dutch",
    nativeName: "Nederlands",
    flag: "🇳🇱",
    code: "nl",
    disabled: true,
  },
  {
    name: "Swedish",
    nativeName: "Svenska",
    flag: "🇸🇪",
    code: "sv",
    disabled: true,
  },
  {
    name: "Danish",
    nativeName: "Dansk",
    flag: "🇩🇰",
    code: "da",
    disabled: true,
  },
  {
    name: "Japanese",
    nativeName: "日本語",
    flag: "🇯🇵",
    code: "ja",
    disabled: true,
  },
  {
    name: "Chinese",
    nativeName: "中文",
    flag: "🇨🇳",
    code: "zh",
    disabled: true,
  },
  {
    name: "Russian",
    nativeName: "Русский",
    flag: "🇷🇺",
    code: "ru",
    disabled: true,
  },
  {
    name: "Korean",
    nativeName: "한국어",
    flag: "🇰🇷",
    code: "ko",
    disabled: true,
  },
  {
    name: "Arabic",
    nativeName: "العربية",
    flag: "🇸🇦",
    code: "ar",
    disabled: true,
  },
];

export default function LanguagePicker() {
  const sortedLanguages = [...languages].sort(
    (a, b) => Number(a.disabled) - Number(b.disabled)
  );

  return (
    <div className="flex flex-col items-center justify-center ">
      <Card className="w-full max-w-2xl p-8 bg-[#f5f2ef]/80 dark:bg-[#363646]/80 backdrop-blur-sm border-none shadow-lg dark:shadow-black/10">
        <h1 className="text-3xl font-bold text-center mb-8 text-[#7c956c] dark:text-[#b3c4a5]">
          I want to learn...
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {sortedLanguages.map((language) => (
            <motion.div
              key={language.code}
              whileHover={{ scale: language.disabled ? 0.99 : 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="transition-transform duration-200"
            >
              <Button
                variant="outline"
                disabled={language.disabled}
                title={language.disabled ? "Coming soon" : undefined}
                className={`w-full h-auto p-6 bg-white/80 dark:bg-[#2a2a3c]/80 ${
                  language.disabled
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-[#f0ede9] dark:hover:bg-[#363646]"
                } border-2 border-[#e5e3e0] dark:border-[#454558] ${
                  !language.disabled &&
                  "hover:border-[#7c956c] dark:hover:border-[#b3c4a5]"
                } rounded-2xl transition-all duration-200 group`}
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
