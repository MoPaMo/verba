"use client";

import { useState } from "react";
import { LessonCircle } from "./lesson-circle";
import { LessonDetails } from "./lesson-details";
import { SectionHeader } from "./section-header";
import type { Lesson, Unit } from "@/types/lessons";

import { ChapterOverview } from "@/app/home/chapter-overview";
type LearningPathProps = {
  units: Unit[];

  onSelectLesson: (lesson: Lesson, unitId: string) => void;
};

export function LearningPath({ units, onSelectLesson }: LearningPathProps) {
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [selectedOverview, setSelectedOverview] = useState<number | null>(null);
  const handleLessonClick = (lesson: Lesson) => {
    if (selectedLesson?.id === lesson.id) {
      console.log(`Starting lesson: ${lesson.title}`);
      onSelectLesson(lesson, "unit-id");
      setSelectedLesson(null);
    } else {
      setSelectedLesson(lesson);
    }
  };

  const handleStartLesson = (lesson: Lesson) => {

    setSelectedLesson(null);
  };


  return (
    <div className="relative w-full max-w-lg mx-auto px-4 py-20">
      {units.map((section, sectionIndex) => (
        <div key={section.title} className="mb-12 last:mb-0">
          <SectionHeader
            title={section.title}
            description={section.description}
            onOverviewClick={() => setSelectedOverview(sectionIndex)}
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
          {selectedOverview === sectionIndex && (
            <ChapterOverview
              isOpen={true}
              onClose={() => setSelectedOverview(null)}
              title={section.title}
              description={section.description}
              content={section.overview}
            />
          )}
        </div>
      ))}
    </div>
  );
}
