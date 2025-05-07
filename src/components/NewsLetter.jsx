export default function NewsLetter() {
  return (
    <section
      id="newsletter"
      className="flex flex-col gap-10 items-center justify-between px-5 text-center py-20 bg-gray-100"
    >
      <h2 className="lg:text-6xl text-3xl font-bold">
        Iscriviti per rimanere aggiornato
      </h2>
      <span className="lg:text-2xl text-lg">
        Iscriviti alla nostra newsletter per rimanere aggiornato su sconti e
        novità
      </span>
      <form className="lg:w-1/5 w-full px-5" action="">
        <div className="flex">
          <input
            name="email"
            type="email"
            className="p-2 grow active:outline-none focus:outline-none rounded-xl"
            placeholder="Lascia la tua mail qui..."
          />
          <button className=" text-green-500 hover:text-green-600 transition cursor-pointer w-15  h-15 relative overflow-hidden">
            <svg className="h-15 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <use href="#send"></use>
            </svg>
          </button>
        </div>
        <hr />
      </form>
      <div className="flex lg:gap-10 gap-3">
        <svg className="w-13 h-13 text-green-500 hover:text-green-600 transition cursor-pointer border rounded-full p-2">
          <use href="#facebook"></use>
        </svg>
        <svg className="w-13 h-13 text-green-500 hover:text-green-600 transition cursor-pointer border rounded-full p-2">
          <use href="#twitter"></use>
        </svg>
        <svg className="w-13 h-13 text-green-500 hover:text-green-600 transition cursor-pointer border rounded-full p-2">
          <use href="#youtube"></use>
        </svg>
        <svg className="w-13 h-13 text-green-500 hover:text-green-600 transition cursor-pointer border rounded-full p-2">
          <use href="#linkedin"></use>
        </svg>
        <svg className="w-13 h-13 text-green-500 hover:text-green-600 transition cursor-pointer border rounded-full p-2">
          <use href="#instagram"></use>
        </svg>
      </div>
    </section>
  );
}
