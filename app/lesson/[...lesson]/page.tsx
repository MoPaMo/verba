"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Heart, Trophy } from "lucide-react";
import { exercises } from "@/data/exercises";
import { FeedbackBar } from "@/app/lesson/[...lesson]/feedback-bar";
import { ExerciseWrapper } from "@/app/lesson/[...lesson]/exercise-wrapper";
export default function LessonInterface() {
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [lives, setLives] = useState(3);
  const isComplete = currentExerciseIndex >= exercises.length;
  const currentExercise = exercises[currentExerciseIndex];
  const progress = (currentExerciseIndex / exercises.length) * 100;
  // Early return for completion screen
  if (isComplete) {
    return (
      <div className="min-h-screen bg-background p-4 flex flex-col items-center justify-center">
        <Card className="w-full max-w-xl p-6 animate-in text-center">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center">
              <Trophy className="w-12 h-12 text-primary" />
            </div>
          </div>
          <h1 className="text-2xl font-bold mb-4">Lesson Complete!</h1>
          <p className="text-muted-foreground mb-6">
            You completed the lesson with {lives}{" "}
            {lives === 1 ? "life" : "lives"} remaining!
          </p>
          <Button
            onClick={() => {
              setCurrentExerciseIndex(0);
              setSelectedAnswer(null);
              setShowFeedback(false);
              setLives(3);
            }}
            className="w-full"
          >
            Start New Lesson
          </Button>
        </Card>
      </div>
    );
  }
  // Early return if no exercise is found
  if (!currentExercise) {
    return (
      <div className="min-h-screen bg-background p-4 flex flex-col items-center justify-center">
        <Card className="w-full max-w-xl p-6 animate-in text-center">
          <h1 className="text-2xl font-bold mb-4">No exercises available</h1>
          <Button
            onClick={() => {
              setCurrentExerciseIndex(0);
              setSelectedAnswer(null);
              setShowFeedback(false);
              setLives(3);
            }}
            className="w-full"
          >
            Restart
          </Button>
        </Card>
      </div>
    );
  }
  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
  };
  const handleSubmit = () => {
    if (!selectedAnswer) return;
    const correct = selectedAnswer === currentExercise.correctAnswer;
    setIsCorrect(correct);
    setShowFeedback(true);
    if (!correct) {
      setLives((prev) => Math.max(0, prev - 1));
    }
  };
  const handleContinue = () => {
    setShowFeedback(false);
    setSelectedAnswer(null);
    setCurrentExerciseIndex((prev) => prev + 1);
  };
  const getFeedbackMessage = (correct: boolean): string => {
    if (correct) {
      const messages = ["Excellent!", "Well done!", "Perfect!", "Great job!"];
      return messages[Math.floor(Math.random() * messages.length)];
    }
    return `Correct answer: ${currentExercise.correctAnswer}`;
  };
  return (
    <div className="min-h-screen bg-background p-4 flex flex-col items-center">
      <div className="w-full max-w-xl flex justify-between items-center mb-8">
        <Progress value={progress} className="w-32" />
        <div className="flex items-center gap-1">
          {Array.from({ length: lives }).map((_, i) => (
            <Heart
              key={i}
              className="w-6 h-6 text-destructive fill-destructive"
            />
          ))}
        </div>
      </div>
      <Card className="w-full max-w-xl p-6 animate-in flex flex-col flex-grow">
        <ExerciseWrapper
          exercise={currentExercise}
          onAnswer={handleAnswer}
          selectedAnswer={selectedAnswer}
          showFeedback={showFeedback}
          isCorrect={isCorrect}
        />
        {!showFeedback && (
          <>
            <div className="flex-grow mb-4"></div>
            <Button
              className="w-full mt-6 text-lg h-12"
              disabled={!selectedAnswer}
              onClick={handleSubmit}
            >
              Check
            </Button>
          </>
        )}
      </Card>
      {showFeedback && (
        <FeedbackBar
          isCorrect={isCorrect}
          message={getFeedbackMessage(isCorrect)}
          onContinue={handleContinue}
        />
      )}
    </div>
  );
}
