"use client";

import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { WordDefinition } from "@/types/chat";

interface TranslatableWordProps {
  word: string;
  definition: WordDefinition;
}

export function TranslatableWord({ word, definition }: TranslatableWordProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <span className="cursor-help hover:text-accent transition-colors duration-300 hover:underline underline-offset-4">
          {word}
        </span>
      </PopoverTrigger>
      <PopoverContent className="w-80 bg-card text-card-foreground shadow-lg animate-in">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h4 className="font-medium">{definition.word}</h4>
            <span className="text-xs text-muted-foreground">
              {definition.partOfSpeech}
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            {definition.definition}
          </p>
          {definition.example && (
            <p className="text-sm italic text-muted-foreground">
              &quot;{definition.example}&quot;
            </p>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
}
