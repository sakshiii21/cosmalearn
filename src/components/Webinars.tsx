"use client"
import { HoverEffect } from "./ui/card-hover-effect";
import Link from "next/link";


function Webinars() {
    const featuredWebinars = [
        {
            title: 'Introduction to Astronomy',
            description:
            'Explore the basics of astronomy, from constellations to celestial motion, and ignite your cosmic curiosity.',
            slug: 'introduction-to-astronomy',
            isFeatured: true,
        },
        {
            title: 'The Solar System Unveiled',
            description:
            'Take a guided tour through our solar system and learn fascinating facts about planets, moons, and more.',
            slug: 'the-solar-system-unveiled',
            isFeatured: true,
        },
        {
            title: 'Stargazing for Beginners',
            description:
            'Discover how to observe stars, planets, and galaxies with just your eyes or a basic telescope.',
            slug: 'stargazing-for-beginners',
            isFeatured: true,
        },
        {
            title: 'The Life Cycle of Stars',
            description:
            'Understand how stars are born, live, and die in spectacular cosmic events like supernovae and black holes.',
            slug: 'life-cycle-of-stars',
            isFeatured: true,
        },
        {
            title: 'Space Missions That Changed History',
            description:
            'Learn about iconic missions from Apollo to Voyager that expanded our understanding of the universe.',
            slug: 'space-missions-history',
            isFeatured: true,
        },
        {
            title: 'Astrobiology: The Search for Life',
            description:
            'Explore the science behind the search for life beyond Earth and the tools astronomers use to detect it.',
            slug: 'astrobiology-search-for-life',
            isFeatured: true,
        },
    ];

  return (
     <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Cosmic Journey</p>
        </div>

        <div className="mt-10">
          <HoverEffect 
          items={featuredWebinars.map((webinar)=>({
            title: webinar.title,
            description: webinar.description,
             link: '/'
          }))}
          />
        </div>

        <div className="mt-10 text-center">
          <Link href={"/"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All webinars
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Webinars;