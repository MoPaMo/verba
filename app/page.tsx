import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
    </div>
  );
}
