"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";


const astronomySchoolContent = [
  {
    title: 'Explore the Universe: A Personal Journey into the Cosmos',
    description:
      'Embark on a celestial journey uniquely tailored to your curiosity. Our personalized astronomy instruction adapts to your pace and interests, guiding you through the wonders of the universe with clarity and inspiration.',
  },
  {
    title: 'Chart Your Path Among the Stars',
    description:
      'Whether you’re a stargazing beginner or aspiring astrophysicist, our flexible courses help you build a solid foundation in astronomy, from planetary science to deep space exploration, with expert support every step of the way.',
  },
  {
    title: 'Hands-On Learning Through Observation',
    description:
      'Experience the cosmos firsthand with guided telescope sessions, interactive star maps, and real-time sky tracking. Our hands-on approach brings theory to life and deepens your connection to the universe.',
  },
  {
    title: 'Live Feedback & Celestial Engagement',
    description:
      'Learn actively with live feedback from instructors and interactive quizzes. Like tracking real-time cosmic events, our dynamic platform keeps your astronomical learning immediate, responsive, and exciting.',
  },
  {
    title: 'Cutting-Edge Curriculum',
    description:
      'Stay up to date with the latest discoveries in space science. Our curriculum evolves with advancements from NASA, ESA, and modern astrophysics, ensuring your education is always relevant and forward-thinking.',
  },
  {
    title: 'Limitless Learning Across the Cosmos',
    description:
      'From the basics of constellations to the mysteries of black holes, our extensive resource library and engaging courses open up infinite opportunities to explore, discover, and grow your cosmic knowledge.',
  },
];

function WhyChooseUs() {
    return (
      <div>
        <StickyScroll content={astronomySchoolContent} />
      </div>
    )
}

export default WhyChooseUs;