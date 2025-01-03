export interface Lesson {
  id: string;
  title: string;
  category: "Grammar" | "Verbs" | "Vocabulary";
  xpReward: number;
  completed: boolean;
  locked: boolean;
  description: string;
  type: string;
}
export interface Section {
  title: string;
  description: string;
  lessons: Lesson[];
}
export interface UserStats {
  health: number;
  maxHealth: number;
  xp: number;
  streak: number;
  level: number;
}

export interface Unit {
    id: string;
    title: string;
    description: string;
    completed: boolean;
    locked: boolean;
    lessons: Lesson[];
  }