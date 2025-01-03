"use client";

import { useState } from "react";
import { StatsBar } from "@/components/stats-bar";
import { LearningPath } from "@/components/learning-path";
import type { Lesson, UserStats, Unit } from "@/types/lessons";



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

const mockStats: UserStats = {
  health: 4,
  maxHealth: 5,
  xp: 10,
  streak: 3,
  level: 1,
};

export default function LearnPage() {
  const [stats] = useState(mockStats);
  const [units] = useState(mockUnits);

  const handleSelectLesson = (lesson: Lesson, unitId: string) => {
    console.log("Selected lesson:", lesson, "from unit:", unitId);

};

  return (
    <div className="min-h-screen bg-[#faf8f6] dark:bg-[#2a2a3c] transition-colors duration-300">
      <StatsBar stats={stats} />
      <LearningPath units={units} onSelectLesson={handleSelectLesson} />
    </div>
  );
}
