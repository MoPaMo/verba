"use client";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import type { ExerciseComponentProps } from "@/types/exercise";
interface Connection {
  left: string;
  right: string;
}
export function ConnectExercise({
  exercise,
  onAnswer,
  selectedAnswer,
  showFeedback,
}: ExerciseComponentProps) {
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [connections, setConnections] = useState<Connection[]>([]);
  const [shake, setShake] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!exercise.pairs) return;
    const allMatched = exercise.pairs.every((pair) =>
      connections.some(
        (conn) => conn.left === pair.left && conn.right === pair.right
      )
    );
    if (allMatched && connections.length === exercise.pairs.length) {
      onAnswer(JSON.stringify(exercise.pairs));
    }
  }, [connections, exercise.pairs, onAnswer]);
  const handleSelect = (side: "left" | "right", value: string) => {
    if (showFeedback) return;
    if (side === "left") {
      setSelectedLeft(value);
    } else if (selectedLeft) {
      const correctPair = exercise.pairs?.find(
        (pair) => pair.left === selectedLeft
      );
      if (correctPair?.right === value) {
        setConnections((prev) => [
          ...prev,
          { left: selectedLeft, right: value },
        ]);
      } else {
        setShake(selectedLeft); 
        setTimeout(() => setShake(null), 500);
      }
      setSelectedLeft(null);
    }
  };
  const removeConnection = (leftWord: string) => {
    setConnections((prev) => prev.filter((c) => c.left !== leftWord));
  };
  const getLineCoordinates = () => {
    if (!containerRef.current) return [];
    const containerRect = containerRef.current.getBoundingClientRect();
    return connections
      .map((connection) => {
        const leftEl = document.getElementById(`left-${connection.left}`);
        const rightEl = document.getElementById(`right-${connection.right}`);
        if (!leftEl || !rightEl) return null;
        const leftRect = leftEl.getBoundingClientRect();
        const rightRect = rightEl.getBoundingClientRect();
        return {
          x1: leftRect.right - containerRect.left,
          y1: leftRect.top - containerRect.top + leftRect.height / 2,
          x2: rightRect.left - containerRect.left,
          y2: rightRect.top - containerRect.top + rightRect.height / 2,
        };
      })
      .filter(Boolean);
  };
  const isWordConnected = (word: string, side: "left" | "right") => {
    return connections.some((c) => c[side] === word);
  };
  return (
    <>
      <div className="text-center mb-8">
        <h2 className="text-xl font-bold mb-4">Connect the matching pairs</h2>
        <p className="text-muted-foreground">
          Tap a word on the left, then tap its match on the right
        </p>
      </div>
      <div
        className="flex justify-between gap-8 relative min-h-[200px]"
        ref={containerRef}
      >
        <svg
          className="absolute inset-0 pointer-events-none"
          style={{ zIndex: 0 }}
          width="100%"
          height="100%"
        >
          {getLineCoordinates().map(
            (line, i) =>
              line && (
                <line
                  key={i}
                  x1={line.x1}
                  y1={line.y1}
                  x2={line.x2}
                  y2={line.y2}
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-primary opacity-40"
                />
              )
          )}
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
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      removeConnection(left);
                    }}
                    className="absolute -right-2 -top-2 p-1 rounded-full bg-background border hover:bg-muted cursor-pointer"
                  >
                    <X className="w-3 h-3" />
                  </div>
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
