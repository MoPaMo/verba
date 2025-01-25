import { Button } from "@/components/ui/button"
import { CheckCircle2, XCircle } from 'lucide-react'

interface FeedbackBarProps {
  isCorrect: boolean
  message: string
  onContinue: () => void
}

export function FeedbackBar({ isCorrect, message, onContinue }: FeedbackBarProps) {
  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 p-4 animate-in ${
        isCorrect ? 'bg-primary/20' : 'bg-destructive/20'
      }`}
    >
      <div className="max-w-xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          {isCorrect ? (
            <CheckCircle2 className="w-6 h-6 text-primary" />
          ) : (
            <XCircle className="w-6 h-6 text-destructive" />
          )}
          <span className="font-medium">{message}</span>
        </div>
        <Button 
          onClick={onContinue}
          variant={isCorrect ? "default" : "secondary"}
        >
          Continue
        </Button>
      </div>
    </div>
  )
}

