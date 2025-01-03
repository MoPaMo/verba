export interface Lesson {
  id: number
  title: string
  category: 'Grammar' | 'Verbs' | 'Vocabulary'
  xpReward: number
  completed: boolean
  locked: boolean
  description: string
  }
export interface Section {
  title: string
  description: string
  lessons: Lesson[]
}
export interface UserStats {
  health: number
  maxHealth: number
  xp: number
  streak: number
  level: number
}
