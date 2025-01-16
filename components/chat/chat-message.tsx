"use client";

import { Message } from "@/types/chat";
import { TranslatableWord } from "./translatable-word";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface ChatMessageProps {
  message: Message;
  onRate?: (rating: number) => void;
}

export function ChatMessage({ message, onRate }: ChatMessageProps) {
  const isAI = message.sender === "ai";

  return (
    <Card
      className={`max-w-[80%] ${isAI ? "ml-0" : "ml-auto"} bg-card shadow-sm`}
    >
      <CardContent className="p-4">
        {isAI ? (
          <div className="space-y-2">
            <div className="space-x-1">
              {message.content.split(" ").map((word, index) => {
                const definition = message.words?.find(
                  (w) => w.word.toLowerCase() === word.toLowerCase(),
                );
                return definition ? (
                  <TranslatableWord
                    key={index}
                    word={word}
                    definition={definition}
                  />
                ) : (
                  <span key={index}>{word} </span>
                );
              })}
            </div>
            {message.translation && (
              <div className="mt-2 pt-2 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  {message.translation.translated}
                </p>
              </div>
            )}
          </div>
        ) : (
          <p>{message.content}</p>
        )}
      </CardContent>
      {!isAI && (
        <CardFooter className="p-2 flex justify-end gap-1">
          {[1, 2, 3, 4, 5].map((rating) => (
            <Button
              key={rating}
              variant="ghost"
              size="sm"
              className={`p-1 h-auto ${
                message.rating === rating
                  ? "text-accent"
                  : "text-muted-foreground"
              }`}
              onClick={() => onRate?.(rating)}
            >
              <Star className="h-4 w-4" />
            </Button>
          ))}
        </CardFooter>
      )}
    </Card>
  );
}
