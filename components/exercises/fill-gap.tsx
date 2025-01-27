"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import type { ExerciseComponentProps } from "@/types/exercise";
export function FillGapExercise({
  exercise,
  onAnswer,
  selectedAnswer,
  showFeedback,
  isCorrect,
}: ExerciseComponentProps) {
  const [inputValue, setInputValue] = useState("");
  const words = exercise.sentence?.split(" ") || [];
  const gapIndex = words.findIndex((word) => word === "_____");
  
  return (
    <>
      <div className="text-center mb-8">
        <h2 className="text-xl font-bold mb-4">Fill in the gap!</h2>
        <p className="text-lg">{exercise.question}</p>
        <div className="flex flex-wrap justify-center gap-2 text-2xl">
          {words.map((word, index) =>
            word === "_____" ? (
              <div key={index} className="min-w-[120px]">
                {showFeedback ? (
                  <span
                    className={cn(
                      "px-3 py-1 rounded-md",
                      isCorrect
                        ? "bg-primary/20 text-primary"
                        : "bg-destructive/20 text-destructive"
                    )}
                  >
                    {exercise.gap}
                  </span>
                ) : (
                  <Input
                    value={inputValue}
                    onChange={(e) => {
                      setInputValue(e.target.value);
                      onAnswer(e.target.value);
                    }}
                    className="text-center text-lg w-32"
                    disabled={showFeedback}
                  />
                )}
              </div>
            ) : (
              <span key={index}>{word}</span>
            )
          )}
        </div>
      </div>
    </>
  );
}
