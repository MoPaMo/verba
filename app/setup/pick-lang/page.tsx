"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import { setLang } from "@/app/actions/set-lang";
import { getLangs } from "@/app/actions/get-valid-langs";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { useState, useEffect } from "react";

export default function LanguagePicker() {
  const [langs, setLangs] = useState([]);

  useEffect(() => {
    getLangs().then((fittedLangs) => {
      if (!fittedLangs.error && fittedLangs.langs) {
        setLangs(fittedLangs.langs);
        console.log("Fitted langs:", fittedLangs.langs);
      }
    });
  }, []);

  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [isAuthError, setIsAuthError] = useState(false);

  const handleLangSelect = async (lang: string) => {
    const result = await setLang(lang);
    if (result.error) {
      setOpen(true);
      setErrorMsg(result.error);
      setIsAuthError(result.errType === "auth");
    } else {
      window.location.href = "/home";
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div className="flex flex-col items-center justify-center ">
        <Card className="w-full max-w-2xl p-8 bg-[#f5f2ef]/80 dark:bg-[#363646]/80 backdrop-blur-sm border-none shadow-lg dark:shadow-black/10">
          <h1 className="text-3xl font-bold text-center mb-8 text-[#7c956c] dark:text-[#b3c4a5]">
            I want to learn...
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {langs.map((language) => (
              <motion.div
                key={language.code}
                whileHover={{ scale: language.disabled ? 0.99 : 1.02 }}
                whileTap={{ scale: language.disabled ? 0.99 : 0.98 }}
                className="transition-transform duration-200"
              >
                <Button
                  onClick={() => handleLangSelect(language.code)}
                  variant="outline"
                  disabled={language.disabled}
                  title={
                    language.disabled ? "Already selected" : "Select Language"
                  }
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
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            An Error occurred while setting your language
          </DialogTitle>
          <DialogDescription>{errorMsg}</DialogDescription>
        </DialogHeader>
        {isAuthError ? (
          <Button asChild variant="default">
            <Link href="/signin">Sign In</Link>
          </Button>
        ) : (
          <div className="grid grid-flow-col gap-4">
            <Button asChild variant="secondary">
              <Link href="/home">Go Home</Link>
            </Button>

            <Button
              onClick={() => {
                setOpen(false);
              }}
            >
              Close
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
