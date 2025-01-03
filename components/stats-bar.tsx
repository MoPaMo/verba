"use client";

import { Heart, Flame, Trophy, Star } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { UserStats } from "@/types/lessons";
import { motion } from "framer-motion";

interface StatsBarProps {
  stats: UserStats;
}

export function StatsBar({ stats }: StatsBarProps) {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 bg-[#f5f2ef]/95 dark:bg-[#363646]/95 backdrop-blur-sm border-b border-[#e5e3e0] dark:border-[#454558] z-50 shadow-sm"
    >
      <div className="container mx-auto px-4 py-2 md:py-3">
        <div className="grid grid-cols-2 md:flex md:items-center md:justify-between gap-3">
          <div className="flex items-center gap-3 bg-white/50 dark:bg-[#2a2a3c]/50 rounded-full px-3 py-1.5">
            <Heart className="w-4 h-4 md:w-5 md:h-5 text-red-500" />
            <Progress
              value={(stats.health / stats.maxHealth) * 100}
              className="w-16 md:w-20 h-2 md:h-2.5 bg-[#e5e3e0] dark:bg-[#2a2a3c]"
            />
            <span className="text-xs md:text-sm font-medium text-[#4a4a4a] dark:text-[#e5e3e0] min-w-[1.5rem]">
              {stats.health}
            </span>
          </div>

          <div className="flex items-center gap-2 justify-end md:justify-start bg-white/50 dark:bg-[#2a2a3c]/50 rounded-full px-3 py-1.5">
            <Flame className="w-4 h-4 md:w-5 md:h-5 text-orange-500" />
            <span className="text-xs md:text-sm font-medium text-[#4a4a4a] dark:text-[#e5e3e0]">
              {stats.streak} day streak
            </span>
          </div>

          <div className="flex items-center gap-2 bg-white/50 dark:bg-[#2a2a3c]/50 rounded-full px-3 py-1.5">
            <Star className="w-4 h-4 md:w-5 md:h-5 text-[#7c956c] dark:text-[#b3c4a5]" />
            <span className="text-xs md:text-sm font-medium text-[#4a4a4a] dark:text-[#e5e3e0]">
              {stats.xp} XP
            </span>
          </div>

          <div className="flex items-center gap-2 justify-end md:justify-start bg-white/50 dark:bg-[#2a2a3c]/50 rounded-full px-3 py-1.5">
            <Trophy className="w-4 h-4 md:w-5 md:h-5 text-yellow-500" />
            <span className="text-xs md:text-sm font-medium text-[#4a4a4a] dark:text-[#e5e3e0]">
              Level {stats.level}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
