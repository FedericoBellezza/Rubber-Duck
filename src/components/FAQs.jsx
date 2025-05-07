import { FAQsAccordion } from "./FAQsAccordion";

export default function FAQs() {
  return (
    <section id="faqs" className="lg:py-20 py-10 lg:px-30 px-5">
      <h3 className="lg:text-6xl text-3xl font-bold text-center">FAQs</h3>
      <div className="flex flex-col lg:flex-row gap-10 mt-10 lg:mt-20">
        <img className="lg:w-8/20" src="/single-image2.png" alt="" />
        <FAQsAccordion />
      </div>
      <div className="flex flex-col lg:flex-row gap-10 justify-center items-start text-center mt-20">
        <div className="flex flex-col items-center gap-3 lg:px-20 px-5 lg:border-r-3 lg:w-1/3">
          <svg className="lg:h-25 lg:w-25 h-15 w-15 text-blue-500">
            <use href="#balloon"></use>
          </svg>
          <h3 className="lg:text-3xl text-xl font-bold">
            100% prodotto di qualità
          </h3>
          <span className="text-lg">
            Abbiamo anche la possibilità di ritiro direttamente dallo stagno
          </span>
        </div>
        <div className="flex flex-col gap-3 lg:px-20 px-5 items-center w-full lg:border-r-3 lg:w-1/3">
          <svg className="lg:h-25 lg:w-25 h-15 w-15 text-blue-500">
            <use href="#bag-heart"></use>
          </svg>
          <h3 className="lg:text-3xl text-xl font-bold">Spedizione gratuita</h3>
          <span className="text-lg">Dal magazzino alla scrivania</span>
        </div>
        <div className="flex flex-col gap-3 lg:px-20 px-5 items-center w-full lg:w-1/3">
          <svg className="lg:h-25 lg:w-25 h-15 w-15 text-blue-500">
            <use href="#handiplast"></use>
          </svg>
          <h3 className="lg:text-3xl text-xl font-bold">Rimborso garantito</h3>
          <span className="text-lg">
            Ti rimborsiamo se la paperella fa quak
          </span>
        </div>
      </div>
    </section>
  );
}
