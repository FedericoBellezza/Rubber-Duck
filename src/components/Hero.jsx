export default function Hero() {
  return (
    <section id="home" className="flex flex-col-reverse lg:flex-row">
      <div className="lg:w-2/5 bg-cover bg-center h-70 lg:h-auto  bg-[url('/banner-image.png')]"></div>
      <div className="lg:w-3/5 flex flex-col gap-10 lg:gap-20 items-center justify-center p-10 bg-[url('/pattern.webp')] bg-cover text-white  overflow-hidden relative ">
        <div class="absolute inset-0 bg-yellow-500/70"></div>
        <h1 className="lg:text-7xl xl:text-8xl text-5xl font-extrabold drop-shadow-[0_5px_15px_rgba(0,0,0,0.7)] text-center z-1">
          Rubber Ducks <br /> Debuggings
        </h1>
        {/* <p className="text-center lg:text-2xl text-xl bg-slate-800/80 py-5 px-5  z-1">
          Spiegare il codice ad una paperella di gomma aiuta i programmatori a
          chiarire il pensiero e individuare pensieri nascosti.
        </p> */}
        <button className="font-bold border-3 rounded-4xl  animate-bounce lg:px-10 px-5 drop-shadow-[0_5px_15px_rgba(0,0,0,0.7)] bg-yellow-300 text-slate-800 border-slate-800 hover:border-white lg:p-5 p-3 text-lg lg:text-3xl cursor-pointer hover:bg-gray-800 hover:text-white transition z-1">
          ACQUISTALA SUBITO!
        </button>
      </div>
    </section>
  );
}
