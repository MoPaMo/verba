import { TranslateExercise } from "@/components/exercises/translate-exercise";
import { ListenExercise } from "@/components/exercises/listen-exercise";
import { FillGapExercise } from "@/components/exercises/fill-gap";
import type { Exercise } from "@/types/exercise";

interface ExerciseWrapperProps {
  exercise: Exercise;
  onAnswer: (answer: string) => void;
  selectedAnswer: string | null;
  showFeedback: boolean;
  isCorrect: boolean;
}

export function ExerciseWrapper(props: ExerciseWrapperProps) {
  switch (props.exercise.type) {
    case "translate":
      return <TranslateExercise {...props} />;
    case "listen":
      return <ListenExercise {...props} />;
    case "fillGap":
      return <FillGapExercise {...props} />;
    default:
      throw new Error(`Unknown exercise type: ${props.exercise.type}`);
  }
}
