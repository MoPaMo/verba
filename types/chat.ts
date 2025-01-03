export interface Translation {
  original: string;
  translated: string;
  language: string;
}

export interface WordDefinition {
  word: string;
  partOfSpeech: string;
  definition: string;
  example?: string;
}

export interface Message {
  id: string;
  content: string;
  sender: "user" | "ai";
  timestamp: Date;
  rating?: number;
  translation?: Translation;
  words?: WordDefinition[];
}
