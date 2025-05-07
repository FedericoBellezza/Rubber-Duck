import { FAQsAccordion } from "./FAQsAccordion";

export default function FAQs() {
  return (
    <section className="py-20 px-30">
      <h3 className="text-6xl font-bold text-center">FAQs</h3>
      <div className="flex gap-10 mt-20">
        <img className="w-8/20" src="/single-image2.png" alt="" />
        <FAQsAccordion />
      </div>
    </section>
  );
}
