"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { BookOpen, GraduationCap, Clock, Trophy } from "lucide-react";
import { Unit } from "@/types/lessons";
interface ChapterOverviewProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  content: Unit["overview"];
}

export function ChapterOverview({
  isOpen,
  onClose,
  title,
  description,
  content,
}: ChapterOverviewProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl h-[80vh] p-0 bg-[#f5f2ef] dark:bg-[#363646] border-[#e5e3e0] dark:border-[#454558]">
        <DialogHeader className="px-6 py-4 border-b border-[#e5e3e0] dark:border-[#454558]">
          <DialogTitle className="text-2xl font-bold text-[#4a4a4a] dark:text-[#e5e3e0]">
            {title}
          </DialogTitle>
          <DialogDescription className="text-[#8c8c8c] dark:text-[#a09f9f]">
            {description}
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="h-full px-6 py-4">
          <div className="space-y-6 pb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-white/50 dark:bg-[#2a2a3c]/50">
                <Clock className="w-5 h-5 text-[#7c956c] dark:text-[#b3c4a5]" />
                <div>
                  <div className="text-sm font-medium text-[#4a4a4a] dark:text-[#e5e3e0]">
                    Estimated Time
                  </div>
                  <div className="text-sm text-[#8c8c8c] dark:text-[#a09f9f]">
                    {content.timeEstimate}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-white/50 dark:bg-[#2a2a3c]/50">
                <GraduationCap className="w-5 h-5 text-[#7c956c] dark:text-[#b3c4a5]" />
                <div>
                  <div className="text-sm font-medium text-[#4a4a4a] dark:text-[#e5e3e0]">
                    Skill Level
                  </div>
                  <div className="text-sm text-[#8c8c8c] dark:text-[#a09f9f]">
                    {content.skillLevel}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-[#4a4a4a] dark:text-[#e5e3e0] flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Introduction
              </h3>
              <p className="text-[#4a4a4a] dark:text-[#e5e3e0] leading-relaxed">
                {content.introduction}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-[#4a4a4a] dark:text-[#e5e3e0] flex items-center gap-2">
                <Trophy className="w-5 h-5" />
                Learning Objectives
              </h3>
              <ul className="space-y-2">
                {content.keyPoints.map((objective, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-[#4a4a4a] dark:text-[#e5e3e0]"
                  >
                    <span className="text-[#7c956c] dark:text-[#b3c4a5] mt-1">
                      •
                    </span>
                    {objective}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-[#4a4a4a] dark:text-[#e5e3e0]">
                Topics Covered
              </h3>
              <div className="flex flex-wrap gap-2">
                {content.topics.map((topic, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-white/50 dark:bg-[#2a2a3c]/50 text-[#4a4a4a] dark:text-[#e5e3e0] border border-[#e5e3e0] dark:border-[#454558]"
                  >
                    {topic}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
