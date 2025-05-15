// This is a server component
import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import TestimonialCards from "@/components/TestimonialCards";
import Webinars from "@/components/Webinars";
import WhyChooseUs from "@/components/whyChooseUs";

export default function Home() {
  return (
   <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
    <HeroSection />
    <FeaturedCourses/>
    <WhyChooseUs />
    <TestimonialCards />
    <Webinars />
   </main>
  );
}
