import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { InfoIcon as InfoCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface AICreditsProgressProps {
  used: number;
  total: number;
  daysLeft: number;
}

export function AICreditsProgress({
  used,
  total,
  daysLeft,
}: AICreditsProgressProps) {
  const percentage = Math.min((used / total) * 100, 100);
  const remaining = total - used;

  return (
    <Card className="p-4 mb-6">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h3 className="text-sm font-medium">AI Credits Usage</h3>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <InfoCircle className="h-4 w-4 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Credits reset in {daysLeft} days</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <span className="text-sm text-muted-foreground">
            {used.toLocaleString()} / {total.toLocaleString()}
          </span>
        </div>
        <Progress
          value={percentage}
          className="h-2 transition-all duration-300 bg-primary-foreground"
        />
        <p className="text-xs text-muted-foreground">
          {remaining.toLocaleString()} credits remaining
        </p>
      </div>
    </Card>
  );
}
