"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Moon, Sun } from 'lucide-react'
import { useState, useEffect } from "react"

const languages = [
  { name: "French", nativeName: "Français", flag: "🇫🇷", code: "fr" },
  { name: "Spanish", nativeName: "Español", flag: "🇪🇸", code: "es" },
  { name: "Portuguese", nativeName: "Português", flag: "🇵🇹", code: "pt" },
  { name: "German", nativeName: "Deutsch", flag: "🇩🇪", code: "de" },
]

export default function LanguagePicker() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-800 p-6 flex flex-col items-center justify-center">
      <Button onClick={toggleTheme} className="absolute top-4 right-4">
        {isDark ? <Sun /> : <Moon />}
      </Button>
      <Card className="w-full max-w-md p-8 bg-gray-100 dark:bg-gray-700">
        <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">I want to learn...</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {languages.map((language) => (
            <motion.div
              key={language.code}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="transition-transform"
            >
              <Button className="w-full">
                {language.flag} {language.name}
              </Button>
            </motion.div>
          ))}
        </div>
      </Card>
    </div>
  )
}