import Characteristics from "@/components/Characteristics";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";

export default function Home() {
  return (
    <div className="text-gray-700">
      <Hero />
      <Characteristics />
      <Reviews />
    </div>
  );
}
