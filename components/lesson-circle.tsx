"use client";

import { Check, Lock } from "lucide-react";
import { motion } from "framer-motion";
import type { Lesson } from "@/types/lessons";

interface LessonCircleProps {
  lesson: Lesson;
  isSelected: boolean;
  onClick: (lesson: Lesson) => void;
}

export function LessonCircle({
  lesson,
  isSelected,
  onClick,
}: LessonCircleProps) {
  return (
    <motion.button
      onClick={() => !lesson.locked && onClick(lesson)}
      disabled={lesson.locked}
      whileHover={!lesson.locked ? { scale: 1.05 } : undefined}
      whileTap={!lesson.locked ? { scale: 0.95 } : undefined}
      className={`
        relative z-10 flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full 
        border-4 transition-all duration-300
        ${
          isSelected
            ? "ring-2 ring-offset-2 ring-[#7c956c] dark:ring-[#b3c4a5]"
            : ""
        }
        ${
          lesson.completed
            ? "border-[#7c956c] dark:border-[#b3c4a5] bg-[#7c956c] dark:bg-[#b3c4a5]"
            : lesson.locked
            ? "border-[#8c8c8c] dark:border-[#a09f9f] bg-[#f5f2ef] dark:bg-[#363646] opacity-50"
            : "border-[#7c956c] dark:border-[#b3c4a5] bg-[#f5f2ef] dark:bg-[#363646]"
        }
      `}
    >
      {lesson.completed ? (
        <Check className="h-8 w-8 text-white dark:text-[#2a2a3c]" />
      ) : lesson.locked ? (
        <Lock className="h-6 w-6 text-[#8c8c8c] dark:text-[#a09f9f]" />
      ) : (
        <span className="text-lg font-medium text-[#4a4a4a] dark:text-[#e5e3e0]">
          {lesson.xpReward}
          <small className="text-xs">XP</small>
        </span>
      )}
    </motion.button>
  );
}
