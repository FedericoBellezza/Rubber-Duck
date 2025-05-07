"use client";

export default function Navbar() {
  function scrollToItem(itemId) {
    const element = document.getElementById(itemId);
    const posizione = element.offsetTop - 100;
    console.log(posizione);

    window.scrollTo({ top: posizione, behavior: "smooth" });
  }
  return (
    <nav className="bg-white px-10 py-3 flex justify-between items-center sticky top-0 w-full z-100">
      <img
        className="cursor-pointer"
        onClick={() => scrollToItem("home")}
        src="/logo.png"
        alt="duck logo"
      />
      <ul className="flex text-lg gap-10 text-gray-500">
        <li
          className="cursor-pointer hover:text-slate-700"
          onClick={() => scrollToItem("home")}
        >
          Home
        </li>
        <li
          className="cursor-pointer hover:text-slate-700"
          onClick={() => scrollToItem("characteristics")}
        >
          I punti di forza
        </li>
        <li
          className="cursor-pointer hover:text-slate-700"
          onClick={() => scrollToItem("reviews")}
        >
          Recensioni
        </li>
        <li
          className="cursor-pointer hover:text-slate-700"
          onClick={() => scrollToItem("collection")}
        >
          Peperelle
        </li>
        <li
          className="cursor-pointer hover:text-slate-700"
          onClick={() => scrollToItem("faqs")}
        >
          FAQs
        </li>
        <li
          className="cursor-pointer hover:text-slate-700"
          onClick={() => scrollToItem("newsletter")}
        >
          Newsletter
        </li>
      </ul>
    </nav>
  );
}
