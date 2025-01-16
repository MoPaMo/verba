"use server";

import { NextResponse } from "next/server";
import type { Unit } from "@/types/lessons";

const mockUnits: Unit[] = [
  {
    id: "1",
    title: "Getting Started",
    description: "Learn the basics of the language",
    completed: false,
    locked: false,
    lessons: [
      {
        id: "1-1",
        title: "Basic Nouns",
        type: "nouns",
        category: "Grammar",
        description: "Introduction to basic nouns",
        xpReward: 10,
        completed: true,
        locked: false,
      },
      {
        id: "1-2",
        title: "Common Phrases",
        type: "phrases",
        category: "Conversation",
        description: "Learn common phrases used in daily conversations",
        xpReward: 15,
        completed: false,
        locked: false,
      },
      {
        id: "1-3",
        title: "To Be Verb",
        type: "verbs",
        category: "Grammar",
        description: "Understanding the 'to be' verb",
        xpReward: 20,
        completed: false,
        locked: true,
      },
    ],
  },
  {
    id: "2",
    title: "Basic Grammar",
    description: "Master essential grammar concepts",
    completed: false,
    locked: true,
    lessons: [
      {
        id: "2-1",
        title: "Basic Adjectives",
        type: "adjectives",
        category: "Grammar",
        description: "Learn basic adjectives",
        xpReward: 15,
        completed: false,
        locked: true,
      },
      {
        id: "2-2",
        title: "Present Tense",
        type: "grammar",
        category: "Verb Tenses",
        description: "Understanding the present tense",
        xpReward: 25,
        completed: false,
        locked: true,
      },
    ],
  },
  {
    id: "3",
    title: "Everyday Life",
    description: "Learn vocabulary for daily situations",
    completed: false,
    locked: true,
    lessons: [
      {
        id: "3-1",
        title: "Food & Drinks",
        type: "nouns",
        category: "Vocabulary",
        description: "Learn names of food and drinks",
        xpReward: 20,
        completed: false,
        locked: true,
      },
      {
        id: "3-2",
        title: "Shopping",
        type: "phrases",
        category: "Conversation",
        description: "Useful phrases for shopping",
        xpReward: 20,
        completed: false,
        locked: true,
      },
    ],
  },
];

export async function GET() {
  return NextResponse.json({ units: mockUnits });
}
