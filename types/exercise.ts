export type ExerciseType = 'translate' | 'listen' | 'match'

export interface Exercise {
  id: number
  type: ExerciseType
  question: string
  answers: {
    text: string
    correct: boolean
  }[]
  correctAnswer: string
  audioUrl?: string
}

export interface ExerciseComponentProps {
  exercise: Exercise
  onAnswer: (answer: string) => void
  selectedAnswer: string | null
  showFeedback: boolean
  isCorrect: boolean
}

