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
      <div className="flex flex-col lg:flex-row lg:gap-20 gap-10 justify-center items-center lg:px-30 px-5">
        <div className="flex flex-col lg:gap-5 gap-2">
          <img src="/product-item1.png" alt="" />
          <span className="lg:text-2xl text-lg">⭐⭐⭐⭐⭐</span>
          <span className="lg:text-4xl text-2xl">Cool-Duck</span>
          <span className="lg:text-4xl text-2xl text-green-500 font-bold">
            $ 15
          </span>
        </div>
        <div className="flex flex-col lg:gap-5 gap-2">
          <img src="/product-item2.png" alt="" />
          <span className="lg:text-2xl text-lg">⭐⭐⭐⭐⭐</span>
          <span className="lg:text-4xl text-2xl">Classic-Duck</span>
          <span className="lg:text-4xl text-2xl text-green-500 font-bold">
            $ 29
          </span>
        </div>
        <div className="flex flex-col lg:gap-5 gap-2">
          <img src="/product-item3.png" alt="" />
          <span className="lg:text-2xl text-lg">⭐⭐⭐⭐⭐</span>
          <span className="lg:text-4xl text-2xl">Bat-Duck</span>
          <span className="lg:text-4xl text-2xl text-green-500 font-bold">
            $ 69
          </span>
        </div>
      </div>
    </section>
  );
}
