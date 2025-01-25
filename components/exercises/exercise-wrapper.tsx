import { TranslateExercise } from "./translate-exercise"
import { ListenExercise } from "./listen-exercise"
import type { Exercise } from "@/types/exercise"

interface ExerciseWrapperProps {
  exercise: Exercise
  onAnswer: (answer: string) => void
  selectedAnswer: string | null
  showFeedback: boolean
  isCorrect: boolean
}

export function ExerciseWrapper(props: ExerciseWrapperProps) {
  switch (props.exercise.type) {
    case 'translate':
      return <TranslateExercise {...props} />
    case 'listen':
      return <ListenExercise {...props} />
    default:
      throw new Error(`Unknown exercise type: ${props.exercise.type}`)
  }
}

