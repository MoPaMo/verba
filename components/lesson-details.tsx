"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { Lesson } from "@/types/lessons";

interface LessonDetailsProps {
  lesson: Lesson;
  onClose: () => void;
  onStart: (lesson: Lesson) => void;
}

export function LessonDetails({
  lesson,
  onClose,
  onStart,
}: LessonDetailsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="absolute mt-4 w-72 z-20 "
      style={{
        top: "100%",
      }}
    >
      <div className="relative">
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 bg-[#f5f2ef] dark:bg-[#363646] z-10" />{" "}
        {/*tip*/}
        <Card className="relative z-20 p-4 bg-[#f5f2ef]/95 dark:bg-[#363646]/95 backdrop-blur-sm border-none shadow-lg">
          <button
            onClick={onClose}
            className="absolute right-2 top-2 p-1 text-[#8c8c8c] dark:text-[#a09f9f] hover:text-[#4a4a4a] dark:hover:text-[#e5e3e0] transition-colors"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-[#4a4a4a] dark:text-[#e5e3e0] mb-1">
              {lesson.title}
            </h3>
            <p className="text-sm text-[#8c8c8c] dark:text-[#a09f9f] mb-2">
              {lesson.category} · {lesson.xpReward} XP
            </p>
            <p className="text-sm text-[#4a4a4a] dark:text-[#e5e3e0]">
              {lesson.description}
            </p>
          </div>
          <Button
            onClick={() => onStart(lesson)}
            className="w-full bg-[#7c956c] hover:bg-[#6a8159] dark:bg-[#b3c4a5] dark:hover:bg-[#9fb38f] text-white dark:text-[#2a2a3c]"
          >
            Start Lesson
          </Button>
        </Card>
      </div>
    </motion.div>
  );
}
