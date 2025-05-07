export default function Hero() {
  return (
    <div className="flex">
      <div className="w-1/2 aspect-7/5 overflow-hidden bg-[url('/banner-image.png')] bg-center "></div>
      <div className="w-1/2 flex flex-col gap-10 items-center justify-center p-10 bg-[url('/banner-bg.png')] text-gray-700 ">
        <h1 className="text-8xl font-bold text-center  ">
          Rubber Ducks <br /> Debuggings
        </h1>
        <p className="text-center text-3xl text-balance">
          Spiegare il codice ad una paperella di gomma aiuta i programmatori a
          chiarire il pensiero e individuare pensieri nascosti.
        </p>
        <button className="border p-5 text-3xl cursor-pointer hover:bg-gray-800 hover:text-white transition hover:border-gray-800">
          ACQUISTALA SUBITO!
        </button>
      </div>
    </div>
  );
}
