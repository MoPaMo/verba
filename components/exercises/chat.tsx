import { Button } from "@/components/ui/button";
import { cn, shuffleArray } from "@/lib/utils";
import type { ExerciseComponentProps } from "@/types/exercise";
export function ChatResponseExercise({
  exercise,
  onAnswer,
  selectedAnswer,
  showFeedback,
  isCorrect,
}: ExerciseComponentProps) {
  const randomizedOptions = shuffleArray(exercise.answers);

  return (
    <>
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4 text-center">
          Choose the best response
        </h2>
        <div className="space-y-4 mb-6">
          <div className="flex gap-2">
            <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center shrink-0">
              {exercise.character || "👤"}
            </div>
            <div className="bg-accent accent-foreground rounded-2xl rounded-tl-none px-4 py-2 max-w-[80%]">
              {exercise.context}
            </div>
          </div>
        </div>
        <div className="space-y-3">
          {randomizedOptions.map((answer, index) => (
            <Button
              key={index}
              variant="outline"
              className={cn(
                "w-full h-auto p-4 text-left justify-start text-lg font-normal",
                selectedAnswer === answer.text &&
                  !showFeedback &&
                  "bg-primary/10 border-primary",
                showFeedback &&
                  answer.correct &&
                  "bg-primary/20 border-primary",
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
      </div>
    </>
  );
}
