import { Language } from "@/types/languages";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Globe2, MessageSquare, Sparkles } from "lucide-react";

const languages: Language[] = [
  {
    name: "Portuguese",
    nativeName: "Português",
    flag: "🇧🇷",
    code: "pt",
    disabled: false,
  },
  {
    name: "German",
    nativeName: "Deutsch",
    flag: "🇩🇪",
    code: "de",
    disabled: false,
  },
];

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Learning",
    description:
      "Personalized lessons that adapt to your learning style and pace",
  },
  {
    icon: MessageSquare,
    title: "Interactive Conversations",
    description: "Practice with our AI tutors in real-world scenarios",
  },
  {
    icon: Globe2,
    title: "Cultural Immersion",
    description: "Learn not just the language, but the culture behind it",
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#faf8f6] dark:bg-[#2a2a3c] transition-colors duration-300">
      <section className="container mx-auto px-4 pt-20 pb-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#4a4a4a] dark:text-[#e5e3e0] transition-colors duration-300">
            Learn Languages with AI
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-[#8c8c8c] dark:text-[#a09f9f] transition-colors duration-300">
            Experience a new way of language learning with Verba. Powered by AI,
            personalized for you.
          </p>
          <Button
            size="lg"
            className="bg-[#7c956c] hover:bg-[#6a8159] dark:bg-[#b3c4a5] dark:hover:bg-[#9fb38f] text-white dark:text-[#2a2a3c] transition-all duration-300"
          >
            Start Learning Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#4a4a4a] dark:text-[#e5e3e0] transition-colors duration-300">
          Available Languages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {languages.map((language) => (
            <Card
              key={language.code}
              className="p-6 bg-[#f5f2ef] dark:bg-[#363646] border-none shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <span className="text-4xl filter dark:opacity-90">
                  {language.flag}
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-[#4a4a4a] dark:text-[#e5e3e0] transition-colors duration-300">
                    {language.name}
                  </h3>
                  <p className="text-[#8c8c8c] dark:text-[#a09f9f] transition-colors duration-300">
                    {language.nativeName}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 bg-[#f5f2ef]/50 dark:bg-[#363646]/50 backdrop-blur-sm transition-colors duration-300">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#4a4a4a] dark:text-[#e5e3e0] transition-colors duration-300">
          Why Choose Verba?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="p-6 bg-white/80 dark:bg-[#2a2a3c]/80 border-none shadow-sm hover:shadow-md transition-all duration-300"
            >
              <feature.icon className="h-8 w-8 mb-4 text-[#7c956c] dark:text-[#b3c4a5] transition-colors duration-300" />
              <h3 className="text-xl font-semibold mb-2 text-[#4a4a4a] dark:text-[#e5e3e0] transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-[#8c8c8c] dark:text-[#a09f9f] transition-colors duration-300">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
