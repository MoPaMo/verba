"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import type { ExerciseComponentProps } from "@/types/exercise";
interface Connection {
  left: string;
  right: string;
  isCorrect?: boolean;
  isAnimating?: boolean;
}
export function ConnectExercise({
  exercise,
  onAnswer,
  selectedAnswer,
  showFeedback,
  isCorrect,
}: ExerciseComponentProps) {
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [connections, setConnections] = useState<Connection[]>([]);
  const [shake, setShake] = useState<string | null>(null);
  useEffect(() => {
    if (
      connections.length === (exercise.pairs?.length || 0) &&
      connections.every((c) => c.isCorrect)
    ) {
      onAnswer(JSON.stringify(connections));
    }
  }, [connections, exercise.pairs?.length, onAnswer]);
  const isWordConnected = (word: string, side: "left" | "right") => {
    return connections.some((c) => c[side] === word);
  };
  const findCorrectPair = (left: string) => {
    return exercise.pairs?.find((pair) => pair.left === left)?.right;
  };
  const handleSelect = (side: "left" | "right", value: string) => {
    if (showFeedback) return;
    if (side === "left") {
      setSelectedLeft(value);
    } else if (selectedLeft) {
      const correctRight = findCorrectPair(selectedLeft);
      const isCorrectMatch = value === correctRight;
      if (isCorrectMatch) {
        setConnections((prev) => [
          ...prev,
          {
            left: selectedLeft,
            right: value,
            isCorrect: true,
          },
        ]);
      } else {
        setShake(selectedLeft);
        setTimeout(() => setShake(null), 500);
      }
      setSelectedLeft(null);
    }
  };
  const removeConnection = (connection: Connection) => {
    setConnections((prev) =>
      prev.filter(
        (c) => c.left !== connection.left && c.right !== connection.right
      )
    );
  };
  return (
    <>
      <div className="text-center mb-8">
        <h2 className="text-xl font-bold mb-4">Connect the matching pairs</h2>
        <p className="text-muted-foreground">
          Tap a word on the left, then tap its match on the right
        </p>
      </div>
      <div className="flex justify-between gap-8 relative">
        <svg
          className="absolute inset-0 pointer-events-none"
          style={{ zIndex: 0 }}
        >
          {connections.map((connection, i) => {
            const leftEl = document.getElementById(`left-${connection.left}`);
            const rightEl = document.getElementById(
              `right-${connection.right}`
            );
            if (!leftEl || !rightEl) return null;
            const leftRect = leftEl.getBoundingClientRect();
            const rightRect = rightEl.getBoundingClientRect();
            const parentRect =
              leftEl.parentElement?.parentElement?.getBoundingClientRect() || {
                x: 0,
                y: 0,
              };
            const x1 = leftRect.right - parentRect.x;
            const y1 = leftRect.top - parentRect.y + leftRect.height / 2;
            const x2 = rightRect.left - parentRect.x;
            const y2 = rightRect.top - parentRect.y + rightRect.height / 2;
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="currentColor"
                strokeWidth="2"
                className={cn(
                  "opacity-20",
                  connection.isCorrect && "text-primary opacity-40"
                )}
              />
            );
          })}
        </svg>
        <div className="flex-1 space-y-3 relative z-10">
          {exercise.pairs?.map(({ left }, index) => (
            <motion.div
              key={`left-${index}`}
              animate={{ x: shake === left ? [-10, 10, -10, 10, 0] : 0 }}
              transition={{ duration: 0.4 }}
            >
              <Button
                id={`left-${left}`}
                variant="outline"
                className={cn(
                  "w-full relative",
                  selectedLeft === left && "bg-primary/10 border-primary",
                  isWordConnected(left, "left") &&
                    "bg-primary/20 border-primary"
                )}
                onClick={() => handleSelect("left", left)}
                disabled={showFeedback || isWordConnected(left, "left")}
              >
                {left}
                {isWordConnected(left, "left") && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      removeConnection(
                        connections.find((c) => c.left === left)!
                      );
                    }}
                    className="absolute -right-2 -top-2 p-1 rounded-full bg-background border"
                  >
                    <X className="w-3 h-3" />
                  </button>
                )}
              </Button>
            </motion.div>
          ))}
        </div>
        <div className="flex-1 space-y-3 relative z-10">
          {exercise.pairs?.map(({ right }, index) => (
            <Button
              key={`right-${index}`}
              id={`right-${right}`}
              variant="outline"
              className={cn(
                "w-full",
                isWordConnected(right, "right") &&
                  "bg-primary/20 border-primary"
              )}
              onClick={() => handleSelect("right", right)}
              disabled={
                showFeedback || !selectedLeft || isWordConnected(right, "right")
              }
            >
              {right}
            </Button>
          ))}
        </div>
      </div>
      <div className="mt-6 text-center text-muted-foreground text-sm">
        {connections.length === 0
          ? "Start by selecting a word on the left"
          : connections.length === exercise.pairs?.length
          ? "All pairs connected!"
          : `${connections.length} of ${exercise.pairs?.length} pairs connected`}
      </div>
    </>
  );
}
