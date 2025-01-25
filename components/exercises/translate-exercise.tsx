import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { ExerciseComponentProps } from "@/types/exercise"

export function TranslateExercise({ 
  exercise, 
  onAnswer, 
  selectedAnswer, 
  showFeedback, 
  isCorrect 
}: ExerciseComponentProps) {
  return (
    <>
      <div className="text-center mb-8">
        <h2 className="text-xl font-bold mb-4">
          Select the correct translation
        </h2>
        <p className="text-2xl font-semibold">{exercise.question}</p>
      </div>

      <div className="grid gap-3">
        {exercise.answers.map((answer, index) => (
          <Button
            key={index}
            variant="outline"
            className={cn(
              "h-auto p-4 text-left justify-start text-lg font-normal",
              selectedAnswer === answer.text && !showFeedback && "bg-primary/10 border-primary",
              showFeedback && answer.correct && "bg-primary/20 border-primary",
              showFeedback && selectedAnswer === answer.text && !answer.correct && "bg-destructive/20 border-destructive"
            )}
            onClick={() => !showFeedback && onAnswer(answer.text)}
            disabled={showFeedback}
          >
            {answer.text}
          </Button>
        ))}
      </div>
    </>
  )
}

