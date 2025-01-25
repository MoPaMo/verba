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
    overview: {
      introduction:
        "Welcome to your Spanish language journey! This foundational unit is designed to give you the essential building blocks of Spanish. You'll start with basic grammar concepts, move on to the crucial 'to be' verbs (ser and estar), and build your first vocabulary set with common nouns.",
      learningObjectives: [
        "Understand basic Spanish grammar rules and sentence structure",
        "Master the difference between 'ser' and 'estar'",
        "Build a foundation of essential Spanish nouns",
        "Construct simple sentences using basic vocabulary",
      ],
      timeEstimate: "2-3 weeks",
      skillLevel: "Beginner",
      topics: [
        "Basic Grammar",
        "Ser vs Estar",
        "Common Nouns",
        "Simple Sentences",
        "Basic Pronunciation",
      ],
    },

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
    overview: {
      introduction:
        "In this unit, you'll dive deeper into Spanish grammar. You'll learn about articles and their usage, as well as how to work with present tense verbs. This knowledge will significantly expand your ability to express yourself in Spanish.",
      learningObjectives: [
        "Master Spanish articles and their agreement with nouns",
        "Learn present tense conjugation patterns",
        "Understand regular and irregular verbs",
        "Practice forming complete sentences in present tense",
      ],
      timeEstimate: "3-4 weeks",
      skillLevel: "Beginner",
      topics: [
        "Articles",
        "Gender Agreement",
        "Present Tense",
        "Regular Verbs",
        "Irregular Verbs",
      ],
    },
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
    title: "Practical Vocabulary",
    description: "Learn useful everyday words and phrases",
    overview: {
      introduction:
        "This unit focuses on practical vocabulary you'll use in everyday situations. From ordering food to describing colors and working with numbers, you'll learn essential words and phrases that will help you communicate in real-world scenarios.",
      learningObjectives: [
        "Build vocabulary for food and dining situations",
        "Master numbers and counting in Spanish",
        "Learn color terms and their usage",
        "Practice real-world conversations",
      ],
      timeEstimate: "2-3 weeks",
      skillLevel: "Beginner",
      topics: [
        "Food Vocabulary",
        "Restaurant Phrases",
        "Numbers 1-100",
        "Colors",
        "Descriptive Words",
      ],
    },

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
