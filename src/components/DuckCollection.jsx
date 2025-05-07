export default function DuckCollection() {
  return (
    <section
      id="collection"
      className="w-full bg-gray-100 py-20 flex flex-col gap-10"
    >
      <h2 className="lg:text-6xl text-3xl font-bold text-center px-5">
        La collezione di paperelle
      </h2>
      <h3 className="lg:text-2xl px-10 text-xl  text-center">
        Una paperella per ogni stile di programmazione
      </h3>
      <div className="flex flex-col lg:flex-row lg:gap-20 gap-20 justify-center items-center lg:px-30 px-5">
        <div className="flex flex-col lg:gap-5 gap-2">
          <div className="rounded-2xl shadow-xl border border-gray-500 overflow-hidden">
            <img
              className=" hover:scale-108 hover:rotate-3 transition"
              src="/product-item1.png"
              alt=""
            />
          </div>
          <span className="lg:text-2xl text-lg flex gap-1 text-yellow-500">
            <svg className="w-6 h-6 lg:w-8 lg:h-8">
              <use href="#star-fill"></use>
            </svg>
            <svg className="w-6 h-6 lg:w-8 lg:h-8">
              <use href="#star-fill"></use>
            </svg>
            <svg className="w-6 h-6 lg:w-8 lg:h-8">
              <use href="#star-fill"></use>
            </svg>
            <svg className="w-6 h-6 lg:w-8 lg:h-8">
              <use href="#star-fill"></use>
            </svg>
            <svg className="w-6 h-6 lg:w-8 lg:h-8">
              <use href="#star-fill"></use>
            </svg>
          </span>
          <div className="flex justify-between">
            <span className=" text-4xl font-bold italic">Cool-Duck</span>
            <span className=" text-4xl text-green-500 font-bold">$ 15</span>
          </div>
        </div>
        <div className="flex flex-col lg:gap-5 gap-2">
          <div className="rounded-2xl shadow-xl border border-gray-500 overflow-hidden">
            <img
              className=" hover:scale-108 hover:rotate-3 transition"
              src="/product-item2.png"
              alt=""
            />
          </div>
          <span className="lg:text-2xl text-lg flex gap-1 text-yellow-500">
            <svg className="w-6 h-6 lg:w-8 lg:h-8">
              <use href="#star-fill"></use>
            </svg>
            <svg className="w-6 h-6 lg:w-8 lg:h-8">
              <use href="#star-fill"></use>
            </svg>
            <svg className="w-6 h-6 lg:w-8 lg:h-8">
              <use href="#star-fill"></use>
            </svg>
            <svg className="w-6 h-6 lg:w-8 lg:h-8">
              <use href="#star-fill"></use>
            </svg>
            <svg className="w-6 h-6 lg:w-8 lg:h-8">
              <use href="#star-fill"></use>
            </svg>
          </span>
          <div className="flex justify-between">
            <span className=" text-4xl font-bold italic">Classic-Duck</span>
            <span className=" text-4xl text-green-500 font-bold">$ 29</span>
          </div>
        </div>
        <div className="flex flex-col lg:gap-5 gap-2 ">
          <div className="rounded-2xl shadow-xl border border-gray-500 overflow-hidden">
            <img
              className=" hover:scale-108 hover:rotate-5 transition"
              src="/product-item3.png"
              alt=""
            />
          </div>
          <span className="lg:text-2xl text-lg flex gap-1 text-yellow-500">
            <svg className="w-6 h-6 lg:w-8 lg:h-8">
              <use href="#star-fill"></use>
            </svg>
            <svg className="w-6 h-6 lg:w-8 lg:h-8">
              <use href="#star-fill"></use>
            </svg>
            <svg className="w-6 h-6 lg:w-8 lg:h-8">
              <use href="#star-fill"></use>
            </svg>
            <svg className="w-6 h-6 lg:w-8 lg:h-8">
              <use href="#star-fill"></use>
            </svg>
            <svg className="w-6 h-6 lg:w-8 lg:h-8">
              <use href="#star-fill"></use>
            </svg>
          </span>
          <div className="flex justify-between">
            <span className=" text-4xl font-bold italic">Bat-Duck</span>
            <span className=" text-4xl text-green-500 font-bold">$ 69</span>
          </div>
        </div>
      </div>
    </section>
  );
}
