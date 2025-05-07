"use client";
import Characteristics from "@/components/Characteristics";
import DuckCollection from "@/components/DuckCollection";
import FAQs from "@/components/FAQs";
import Hero from "@/components/Hero";
import NewsLetter from "@/components/NewsLetter";
import Reviews from "@/components/Reviews";

export default function Home() {
  return (
    <div className="text-gray-700">
      <Hero />
      <Characteristics />
      <Reviews />
      <DuckCollection />
      <FAQs />
      <NewsLetter />
    </div>
  );
}
