import type { Exercise } from "@/types/exercise"

export const exercises: Exercise[] = [
  {
    id: 1,
    type: "translate",
    question: "Buenos días",
    answers: [
      { text: "Good morning", correct: true },
      { text: "Good night", correct: false },
      { text: "Hello", correct: false },
      { text: "Goodbye", correct: false },
    ],
    correctAnswer: "Good morning",
  },
  {
    id: 2,
    type: "listen",
    question: "Listen and select",
    answers: [
      { text: "¿Cómo estás?", correct: true },
      { text: "¿Qué tal?", correct: false },
      { text: "¿Dónde está?", correct: false },
      { text: "¿Quién es?", correct: false },
    ],
    correctAnswer: "¿Cómo estás?",
    audioUrl: "/placeholder.mp3",
  },
  {
    id: 3,
    type: "translate",
    question: "Gracias",
    answers: [
      { text: "Please", correct: false },
      { text: "Thank you", correct: true },
      { text: "You're welcome", correct: false },
      { text: "Sorry", correct: false },
    ],
    correctAnswer: "Thank you",
  },
]

