import { FAQsAccordion } from "./FAQsAccordion";

export default function FAQs() {
  return (
    <section id="faqs" className="py-20 px-30">
      <h3 className="text-6xl font-bold text-center">FAQs</h3>
      <div className="flex gap-10 mt-20">
        <img className="w-8/20" src="/single-image2.png" alt="" />
        <FAQsAccordion />
      </div>
      <div className="flex justify-center items-start text-center mt-20">
        <div className="flex flex-col items-center gap-3 px-20 border-r-3 w-1/3">
          <svg className="w-25 text-blue-500">
            <use href="#balloon"></use>
          </svg>
          <h3 className="text-3xl font-bold">100% prodotto di qualità</h3>
          <span>
            Abbiamo anche la possibilità di ritiro direttamente dallo stagno
          </span>
        </div>
        <div className="flex flex-col gap-3 px-20 items-center  border-r-3 w-1/3">
          <svg className="w-25 text-blue-500">
            <use href="#bag-heart"></use>
          </svg>
          <h3 className="text-3xl font-bold">Spedizione gratuita</h3>
          <span>Dal magazzino alla scrivania</span>
        </div>
        <div className="flex flex-col gap-3 px-20 items-center 3 w-1/3">
          <svg className="w-25 text-blue-500">
            <use href="#handiplast"></use>
          </svg>
          <h3 className="text-3xl font-bold">Rimborso garantito</h3>
          <span>Ti rimborsiamo se la paperella fa quak</span>
        </div>
      </div>
    </section>
  );
}
