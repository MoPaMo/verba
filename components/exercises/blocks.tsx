"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ExerciseComponentProps } from "@/types/exercise";
export function WordBlocksExercise({
  exercise,
  onAnswer,
  selectedAnswer,
  showFeedback,
  isCorrect,
}: ExerciseComponentProps) {
  const [selectedBlocks, setSelectedBlocks] = useState<string[]>([]);
  const availableWords = exercise.answers.map((a) => a.text);
  const handleBlockClick = (word: string) => {
    if (showFeedback) return;
    const newBlocks = selectedBlocks.includes(word)
      ? selectedBlocks.filter((b) => b !== word)
      : [...selectedBlocks, word];
    setSelectedBlocks(newBlocks);
    onAnswer(newBlocks.join(" "));
  };
  return (
    <>
      <div className="text-center mb-8">
        <h2 className="text-xl font-bold mb-4">Build the sentence</h2>
        <p className="text-lg mb-6">{exercise.question}</p>
        <div className="min-h-[60px] p-4 bg-muted rounded-lg mb-6 flex flex-wrap gap-2">
          {selectedBlocks.map((word, index) => (
            <Button
              key={index}
              variant="secondary"
              className={cn(
                "text-lg",
                showFeedback && isCorrect && "bg-primary/20 text-primary",
                showFeedback &&
                  !isCorrect &&
                  "bg-destructive/20 text-destructive"
              )}
              onClick={() => handleBlockClick(word)}
            >
              {word}
            </Button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 justify-center">
          {availableWords.map((word, index) => (
            <Button
              key={index}
              variant="outline"
              className={cn(
                "text-lg",
                selectedBlocks.includes(word) && "opacity-50"
              )}
              onClick={() => handleBlockClick(word)}
              disabled={showFeedback || selectedBlocks.includes(word)}
            >
              {word}
            </Button>
          ))}
        </div>
      </div>
    </>
  );
}
