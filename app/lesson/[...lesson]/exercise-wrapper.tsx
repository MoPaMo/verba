import { TranslateExercise } from "@/components/exercises/translate-exercise";
import { ListenExercise } from "@/components/exercises/listen-exercise";
import { FillGapExercise } from "@/components/exercises/fill-gap";
import { WordBlocksExercise } from "@/components/exercises/word-blocks";
import { ConnectExercise } from "@/components/exercises/connect";
import { ChatResponseExercise } from "@/components/exercises/chat";
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
    case "wordBlocks":
      return <WordBlocksExercise {...props} />;
    case "connect":
      return <ConnectExercise {...props} />;
    case "chatResponse":
      return <ChatResponseExercise {...props} />;
    default:
      throw new Error(`Unknown exercise type: ${props.exercise.type}`);
  }
}
