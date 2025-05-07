export default function DuckCollection() {
  return (
    <section className="w-full bg-gray-100 py-20 flex flex-col gap-10">
      <h2 className="text-6xl font-bold text-center">
        La collezione di paperelle
      </h2>
      <h3 className="text-2xl  text-center">
        Una paperella per ogni stile di programmazione
      </h3>
      <div className="flex gap-20 justify-center items-center px-30">
        <div className="flex flex-col gap-5">
          <img src="/product-item1.png" alt="" />
          <span className="text-2xl">⭐⭐⭐⭐⭐</span>
          <span className="text-4xl">Cool-Duck</span>
          <span className="text-4xl text-green-500 font-bold">$ 15</span>
        </div>
        <div className="flex flex-col gap-5">
          <img src="/product-item2.png" alt="" />
          <span className="text-2xl">⭐⭐⭐⭐⭐</span>
          <span className="text-4xl">Classic-Duck</span>
          <span className="text-4xl text-green-500 font-bold">$ 29</span>
        </div>
        <div className="flex flex-col gap-5">
          <img src="/product-item3.png" alt="" />
          <span className="text-2xl">⭐⭐⭐⭐⭐</span>
          <span className="text-4xl">Bat-Duck</span>
          <span className="text-4xl text-green-500 font-bold">$ 69</span>
        </div>
      </div>
    </section>
  );
}
