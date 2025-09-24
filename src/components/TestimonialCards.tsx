'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { cn } from "@/lib/utils";
import React from "react";

const testimonials = [
  {
    quote:
      "This course transformed the way I understand music theory. The lessons were clear, interactive, and made me confident in reading sheet music.",
    name: "Sarah Thompson",
    title: "Beginner Music Theory",
  },
  {
    quote:
      "Learning guitar has always been a dream. Thanks to the step-by-step structure of this course, I can now play my favorite songs in just a few weeks!",
    name: "James Rodriguez",
    title: "Guitar for Beginners",
  },
  {
    quote:
      "The piano course was amazing. The instructor explained techniques so simply that even complex chords felt easy to play.",
    name: "Emily Carter",
    title: "Piano Essentials",
  },
  {
    quote:
      "I never thought I’d enjoy online singing lessons, but this course proved me wrong. My vocal range improved, and I gained so much confidence.",
    name: "Michael Lee",
    title: "Vocal Training Masterclass",
  },
  {
    quote:
      "The music production course was hands-on and practical. I learned how to compose, mix, and master tracks using professional tools.",
    name: "Aisha Khan",
    title: "Music Production with DAW",
  },
];

function TestimonialCards() {
  return (
    <div className="relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black overflow-hidden">
      {/* Dot Background */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
        )}
      />
      {/* Radial fade overlay */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          Hear our Harmony: Voices of success
        </h2>
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

export default TestimonialCards;
