import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

interface ErrorPageProps {
  title: string;
  message: string;
  emoji: string;
}

export function ErrorPage({ title, message, emoji }: ErrorPageProps) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-background">
      <Card className="max-w-md w-full p-8 flex flex-col items-center text-center animate-in">
        <div className="text-8xl mb-6 animate-bounce-gentle">{emoji}</div>
        <h1 className="text-3xl font-semibold mb-4 text-foreground">{title}</h1>
        <p className="text-muted-foreground mb-8">{message}</p>
        <Button asChild className="transition-all duration-300">
          <Link href="/">Return Home</Link>
        </Button>
      </Card>
    </div>
  );
}
