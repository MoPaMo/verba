import type { Exercise } from "@/types/exercise";

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
    type: "fillGap",
    question: "The cat is on the table",
    sentence: "El gato _____ en la mesa",
    answers: [{ text: "está", correct: true }],
    correctAnswer: "está",
  },
  {
    id: 3,
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
    id: 4,
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
  {
    id: 5,
    type: "connect",
    question: "Match the words with their translations",
    pairs: [
      { left: "Casa", right: "House" },
      { left: "Perro", right: "Dog" },
      { left: "Gato", right: "Cat" },
      { left: "Árbol", right: "Tree" },
    ],
    answers: [],
    correctAnswer: JSON.stringify([
      { left: "Casa", right: "House" },
      { left: "Perro", right: "Dog" },
      { left: "Gato", right: "Cat" },
      { left: "Árbol", right: "Tree" },
    ]),
  },
  {
    id: 6,
    type: "chatResponse",
    question: "Choose the best response",
    context: "¿Cómo estás hoy?",
    character: "👩",
    answers: [
      { text: "Muy bien, gracias. ¿Y tú?", correct: true },
      { text: "Adiós", correct: false },
      { text: "Me llamo Juan", correct: false },
      { text: "Son las tres", correct: false },
    ],
    correctAnswer: "Muy bien, gracias. ¿Y tú?",
  },
];
