"use client";

import { useState } from "react";
import { LessonCircle } from "./lesson-circle";
import { LessonDetails } from "./lesson-details";
import { SectionHeader } from "./section-header";
import type { Lesson } from "@/types/lessons";

const LESSONS: Lesson[] = [
  {
    id: 1,
    title: "Basics",
    category: "Grammar",
    xpReward: 10,
    completed: true,
    locked: false,
    description:
      "Learn the fundamentals of Spanish grammar and basic sentence structure. Perfect for beginners!",
  },
  {
    id: 2,
    title: "To Be",
    category: "Verbs",
    xpReward: 15,
    completed: true,
    locked: false,
    description:
      "Master the essential 'ser' and 'estar' verbs. Understand when to use each one.",
  },
  {
    id: 3,
    title: "Nouns",
    category: "Vocabulary",
    xpReward: 20,
    completed: false,
    locked: false,
    description:
      "Learn common nouns and their gender. Build your basic Spanish vocabulary.",
  },
  {
    id: 4,
    title: "Articles",
    category: "Grammar",
    xpReward: 15,
    completed: false,
    locked: true,
    description:
      "Understand how to use 'el', 'la', 'los', and 'las'. Master Spanish articles.",
  },
  {
    id: 5,
    title: "Present",
    category: "Verbs",
    xpReward: 25,
    completed: false,
    locked: true,
    description:
      "Learn present tense conjugations for regular and irregular verbs.",
  },
  {
    id: 6,
    title: "Food",
    category: "Vocabulary",
    xpReward: 20,
    completed: false,
    locked: true,
    description:
      "Essential food and drink vocabulary. Learn how to order at restaurants.",
  },
  {
    id: 7,
    title: "Numbers",
    category: "Vocabulary",
    xpReward: 15,
    completed: false,
    locked: true,
    description:
      "Count and use numbers in Spanish. Learn cardinal and ordinal numbers.",
  },
  {
    id: 8,
    title: "Colors",
    category: "Vocabulary",
    xpReward: 15,
    completed: false,
    locked: true,
    description: "Learn color names and their agreements with nouns.",
  },
];

const SECTIONS = [
  {
    title: "Getting Started",
    description: "Master the basics of Spanish language",
    lessons: LESSONS.slice(0, 3),
  },
  {
    title: "Essential Grammar",
    description: "Build your foundation with core grammar concepts",
    lessons: LESSONS.slice(3, 5),
  },
  {
    title: "Practical Vocabulary",
    description: "Learn useful everyday words and phrases",
    lessons: LESSONS.slice(5),
  },
];

export function LearningPath() {
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);

  const handleLessonClick = (lesson: Lesson) => {
    if (selectedLesson?.id === lesson.id) {
      console.log(`Starting lesson: ${lesson.title}`);
      setSelectedLesson(null);
    } else {
      setSelectedLesson(lesson);
    }
  };

  const handleStartLesson = (lesson: Lesson) => {
    console.log(`Starting lesson: ${lesson.title}`);
    setSelectedLesson(null);
  };

  const handleSectionOverview = (sectionTitle: string) => {
    alert(`Opening overview for section: ${sectionTitle}`);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto px-4 py-20">
      {SECTIONS.map((section, sectionIndex) => (
        <div key={section.title} className="mb-12 last:mb-0">
          <SectionHeader
            title={section.title}
            description={section.description}
            onOverviewClick={() => handleSectionOverview(section.title)}
          />
          <div className="relative mt-8">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#e5e3e0] dark:bg-[#454558] -translate-x-1/2" />
            <div className="relative py-8 space-y-12 md:space-y-20">
              {section.lessons.map((lesson, index) => (
                <div
                  key={lesson.id}
                  className={`
                    flex items-center relative
                    ${
                      index % 2 === 0
                        ? "justify-center md:justify-start"
                        : "justify-center md:justify-end"
                    }
                  `}
                >
                  <div
                    className={`
                      absolute top-1/2 hidden md:block
                      ${
                        index % 2 === 0
                          ? "left-[calc(50%+2.5rem)] right-0"
                          : "right-[calc(50%+2.5rem)] left-0"
                      }
                      h-0.5 bg-[#e5e3e0] dark:bg-[#454558]
                    `}
                  />
                  <div
                    className={`relative ${
                      index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                    }`}
                  >
                    <LessonCircle
                      lesson={lesson}
                      isSelected={selectedLesson?.id === lesson.id}
                      onClick={handleLessonClick}
                    />
                    {selectedLesson?.id === lesson.id && (
                      <LessonDetails
                        lesson={lesson}
                        onClose={() => setSelectedLesson(null)}
                        onStart={handleStartLesson}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
