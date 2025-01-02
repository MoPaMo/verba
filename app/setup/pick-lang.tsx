"use client";

import React from "react";

const languages = [
  { name: "French", nativeName: "Français", flag: "🇫🇷", code: "fr" },
  { name: "Spanish", nativeName: "Español", flag: "🇪🇸", code: "es" },
  { name: "Portuguese", nativeName: "Português", flag: "🇵🇹", code: "pt" },
  { name: "German", nativeName: "Deutsch", flag: "🇩🇪", code: "de" },
];

export default function LanguagePicker() {
  return (
    <div>
      <h1>I want to learn...</h1>
      <ul>
        {languages.map((language) => (
          <li key={language.code}>
            {language.flag} {language.name} ({language.nativeName})
          </li>
        ))}
      </ul>
    </div>
  );
}
