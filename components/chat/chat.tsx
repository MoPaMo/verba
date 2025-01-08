"use client";

import { useState } from "react";
import { Message } from "@/types/chat";
import { ChatMessage } from "./chat-message";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

const mockMessages: Message[] = [
  {
    id: "1",
    content: "Bonjour! Comment allez-vous?",
    sender: "ai",
    timestamp: new Date(),
    translation: {
      original: "Bonjour! Comment allez-vous?",
      translated: "Hello! How are you?",
      language: "fr",
    },
    words: [
      {
        word: "Bonjour",
        partOfSpeech: "interjection",
        definition: "Hello, good morning",
        example: "Bonjour, comment vas-tu?",
      },
      {
        word: "Comment",
        partOfSpeech: "adverb",
        definition: "How",
        example: "Comment tu t'appelles?",
      },
      {
        word: "allez",
        partOfSpeech: "verb",
        definition: 'To go (vous form of "aller")',
        example: "Vous allez à l'école.",
      },
    ],
  },
  {
    id: "2",
    content: "I am doing well, thank you!",
    sender: "user",
    timestamp: new Date(),
    rating: 4,
  },
];

export function LanguageChat() {
  const [messages, setMessages] = useState<Message[]>(mockMessages);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newMessage]);
    setInput("");
  };

  const handleRate = (messageId: string, rating: number) => {
    setMessages((prev) =>
      prev.map((message) =>
        message.id === messageId ? { ...message, rating } : message
      )
    );
  };

  return (
    <div className="flex flex-col h-[80vh] max-w-2xl mx-auto p-4">
      <div className="flex-1 overflow-y-auto space-y-4 pb-4">
        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            message={message}
            onRate={(rating) => handleRate(message.id, rating)}
          />
        ))}
      </div>
      <div className="flex gap-2 pt-4 border-t border-border">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1"
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSend();
            }
          }}
        />
        <Button onClick={handleSend} className="bg-accent hover:bg-accent/90">
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
