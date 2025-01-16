"use client"
import { useEffect, useState } from "react";
import { StatsBar } from "@/components/stats-bar";
import { LearningPath } from "@/components/learning-path";
import type { Lesson, UserStats, Unit } from "@/types/lessons";

export default function LearnPage() {
  const [stats] = useState<UserStats>({
    health: 4,
    maxHealth: 5,
    xp: 10,
    streak: 3,
    level: 1,
  });
  const [units, setUnits] = useState<Unit[]>([]);

  useEffect(() => {
    fetch("/api/lessons")
      .then((response) => response.json())
      .then((data) => setUnits(data.units))
      .catch((error) => console.error("Error fetching lessons:", error));
  }, []);

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
