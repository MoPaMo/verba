import { Button } from "@/components/ui/button";
import { Volume2 } from "lucide-react";
import { cn, shuffleArray } from "@/lib/utils";
import type { ExerciseComponentProps } from "@/types/exercise";
import { useEffect, useState } from "react";
export function ListenExercise({
  exercise,
  onAnswer,
  selectedAnswer,
  showFeedback,
  isCorrect,
}: ExerciseComponentProps) {
  const [randomizedOptions, setRandomizedOptions] = useState(exercise.answers);

  useEffect(() => {
    setRandomizedOptions(shuffleArray(exercise.answers));
  }, [exercise.answers]);
  return (
    <>
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <h2 className="text-xl font-bold">
            Listen and select the correct phrase
          </h2>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Volume2 className="w-5 h-5" />
          </Button>
        </div>
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

      <div className="mt-6 text-center text-muted-foreground">
        <p>Tap the speaker icon to hear the phrase</p>
      </div>
    </>
  );
}
