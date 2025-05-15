'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards"
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote:
      "CosmaLearn completely transformed my understanding of the universe. The interactive content made complex topics feel simple and exciting!",
    name: "Aarav Mehta",
    title: "High School Student & Aspiring Astrophysicist",
  },
  {
    quote:
      "As a science teacher, I found CosmaLearn’s curriculum to be both accurate and engaging. My students love the visual explanations and space facts!",
    name: "Meena Raghavan",
    title: "Physics Educator, Delhi Public School",
  },
  {
    quote:
      "I always wanted to learn about stars and galaxies. CosmaLearn helped me explore astronomy at my own pace and made learning truly fun.",
    name: "Ritika Shah",
    title: "CosmaLearn Learner & Stargazing Enthusiast",
  },
  {
    quote:
      "The quizzes and sky maps kept me coming back every day. CosmaLearn makes astronomy accessible, even if you’re just starting out.",
    name: "Kabir Joshi",
    title: "Undergraduate Student, B.Sc. in Physics",
  },
  {
    quote:
      "CosmaLearn is a gem for anyone curious about space. The courses are well-structured, and the live sky sessions are a huge bonus!",
    name: "Dr. Nishant Kulkarni",
    title: "Astronomy Club Mentor, Pune University",
  },
];

function TestimonialCards() {
    return (
         <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
         <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
        )}
      />
        <h2 className="text-3xl font-bold text-center mb-8 z-10">What Our Stargazers Are Saying</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="normal"
      />
            </div>
        </div>
    </div>
    )
}

export default TestimonialCards;