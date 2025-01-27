import { Button } from "@/components/ui/button";
import { cn, shuffleArray } from "@/lib/utils";
import type { ExerciseComponentProps } from "@/types/exercise";
import { useEffect, useState } from "react";
export function TranslateExercise({
  exercise,
  onAnswer,
  selectedAnswer,
  showFeedback,
  isCorrect,
}: ExerciseComponentProps) {
  interface AnswerType {
    text: string;
    correct: boolean;
  }
  const [randomizedOptions, setRandomizedOptions] = useState<AnswerType[]>([]);

  useEffect(() => {
    setRandomizedOptions(shuffleArray(exercise.answers));
  }, [exercise.answers]);
  return (
    <>
      <div className="text-center mb-8">
        <h2 className="text-xl font-bold mb-4">
          Select the correct translation
        </h2>
        <p className="text-2xl font-semibold">{exercise.question}</p>
      </div>

      <div className="grid gap-3">
        {randomizedOptions.map((answer, index) => (
          <Button
            key={index}
            variant="outline"
            className={cn(
              "h-auto p-4 text-left justify-start text-lg font-normal",
              selectedAnswer === answer.text &&
                !showFeedback &&
                "bg-primary/10 border-primary",
              showFeedback && answer.correct && "bg-primary/20 border-primary",
              showFeedback &&
                selectedAnswer === answer.text &&
                !answer.correct &&
                "bg-destructive/20 border-destructive"
            )}
            onClick={() => !showFeedback && onAnswer(answer.text)}
            disabled={showFeedback}
          >
            {answer.text}
          </Button>
        ))}
      </div>
    </>
  );
}
