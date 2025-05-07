export default function Hero() {
  return (
    <section id="home" className="flex flex-col lg:flex-row">
      <div className="lg:w-1/2 h-100 lg:aspect-7/5 overflow-hidden bg-[url('/banner-image.png')] bg-cover lg:h-max  bg-center "></div>
      <div className="lg:w-1/2 flex flex-col gap-10 items-center justify-center p-10 bg-[url('/pattern.webp')] bg-cover text-white text-shadow-lg overflow-hidden relative ">
        <div class="absolute inset-0 bg-black/30"></div>
        <h1 className="lg:text-8xl text-4xl font-bold text-center z-1">
          Rubber Ducks <br /> Debuggings
        </h1>
        <p className="text-center lg:text-2xl text-xl bg-slate-800/80 py-5 px-5  z-1">
          Spiegare il codice ad una paperella di gomma aiuta i programmatori a
          chiarire il pensiero e individuare pensieri nascosti.
        </p>
        <button className="border font-bold border-white hover:border-gray-800 p-5 text-xl lg:text-3xl cursor-pointer hover:bg-gray-800 hover:text-white transition z-1">
          ACQUISTALA SUBITO!
        </button>
      </div>
    </section>
  );
}
