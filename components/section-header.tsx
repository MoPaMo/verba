"use client";

import { BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface SectionHeaderProps {
  title: string;
  description: string;
  onOverviewClick?: () => void;
}

export function SectionHeader({
  title,
  description,
  onOverviewClick,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-[4.5rem] z-40 -mx-4 px-4 py-4 bg-[#faf8f6]/95 dark:bg-[#2a2a3c]/95 backdrop-blur-sm border-b border-[#e5e3e0] dark:border-[#454558]"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-[#4a4a4a] dark:text-[#e5e3e0] mb-1">
            {title}
          </h2>
          <p className="text-sm text-[#8c8c8c] dark:text-[#a09f9f]">
            {description}
          </p>
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={onOverviewClick}
          className="shrink-0 bg-white/50 dark:bg-[#363646]/50 border-[#e5e3e0] dark:border-[#454558] hover:bg-[#f5f2ef] dark:hover:bg-[#454558]"
        >
          <BookOpen className="h-4 w-4 text-[#7c956c] dark:text-[#b3c4a5]" />
          <span className="sr-only">Section Overview</span>
        </Button>
      </div>
    </motion.div>
  );
}
