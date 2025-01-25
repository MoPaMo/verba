export type ExerciseType =
  | "translate"
  | "listen"
  | "fillGap"
  | "wordBlocks"
  | "vocabulary"
  | "connect"
  | "chatResponse";

export interface Exercise {
  id: number;
  type: ExerciseType;
  question: string;
  answers: {
    text: string;
    correct: boolean;
  }[];
  correctAnswer: string;
  audioUrl?: string;
  sentence?: string;
  gap?: string;
  image?: string;
  pairs?: Array<{
    left: string;
    right: string;
  }>;
  context?: string;
  character?: string;
}

export interface ExerciseComponentProps {
  exercise: Exercise;
  onAnswer: (answer: string) => void;
  selectedAnswer: string | null;
  showFeedback: boolean;
  isCorrect: boolean;
}
