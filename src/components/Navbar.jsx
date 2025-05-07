"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  const handleScroll = () => {
    // console.log("finestra: " + window.scrollY);

    if (
      document.getElementById("newsletter").offsetTop - 700 <
      window.scrollY
    ) {
      setActiveSection("newsletter");
    } else if (
      document.getElementById("faqs").offsetTop - 600 <
      window.scrollY
    ) {
      setActiveSection("faqs");
    } else if (
      document.getElementById("collection").offsetTop - 500 <
      window.scrollY
    ) {
      setActiveSection("collection");
    } else if (
      document.getElementById("reviews").offsetTop - 500 <
      window.scrollY
    ) {
      setActiveSection("reviews");
    } else if (
      document.getElementById("characteristics").offsetTop - 500 <
      window.scrollY
    ) {
      setActiveSection("characteristics");
    } else if (
      document.getElementById("home").offsetTop - 500 <
      window.scrollY
    ) {
      setActiveSection("home");
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  };

  function scrollToItem(itemId) {
    setMenuOpen(false);
    const element = document.getElementById(itemId);
    const posizione = element.offsetTop - 100;
    console.log(posizione);

    window.scrollTo({ top: posizione, behavior: "smooth" });
  }

  return (
    <>
      <nav className="bg-white px-10 py-3  justify-between items-center fixed top-0 w-full z-100 hidden lg:flex ">
        <img
          className="cursor-pointer"
          onClick={() => scrollToItem("home")}
          src="/logo.png"
          alt="duck logo"
        />
        <ul className="flex text-lg gap-10 text-gray-500">
          <li
            className={`cursor-pointer transition  ${
              activeSection === "home"
                ? "text-blue-600 hover:text-blue-800"
                : "hover:text-slate-700"
            } `}
            onClick={() => scrollToItem("home")}
          >
            Home
          </li>

          <li
            className={`cursor-pointer transition  ${
              activeSection === "characteristics"
                ? "text-blue-600 hover:text-blue-800"
                : "hover:text-slate-700"
            } `}
            onClick={() => scrollToItem("characteristics")}
          >
            I punti di forza
          </li>
          <li
            className={`cursor-pointer transition  ${
              activeSection === "reviews"
                ? "text-blue-600 hover:text-blue-800"
                : "hover:text-slate-700"
            } `}
            onClick={() => scrollToItem("reviews")}
          >
            Recensioni
          </li>
          <li
            className={`cursor-pointer transition  ${
              activeSection === "collection"
                ? "text-blue-600 hover:text-blue-800"
                : "hover:text-slate-700"
            } `}
            onClick={() => scrollToItem("collection")}
          >
            Peperelle
          </li>
          <li
            className={`cursor-pointer transition  ${
              activeSection === "faqs"
                ? "text-blue-600 hover:text-blue-800"
                : "hover:text-slate-700"
            } `}
            onClick={() => scrollToItem("faqs")}
          >
            FAQs
          </li>
          <li
            className={`cursor-pointer transition  ${
              activeSection === "newsletter"
                ? "text-blue-600 hover:text-blue-800"
                : "hover:text-slate-700"
            } `}
            onClick={() => scrollToItem("newsletter")}
          >
            Newsletter
          </li>
        </ul>
      </nav>

      {/* mobile navbar */}
      <nav className="bg-white px-5 py-2   justify-between items-center fixed top-0 w-full z-100 flex lg:hidden">
        <img className="h-13" src="/logo.png" alt="" />
        <h2 className="font-bold">Rubber Ducks</h2>
        <svg onClick={() => setMenuOpen(true)} className="w-10 h-10">
          <use href="#navbar-icon"></use>
        </svg>
      </nav>
      <div
        className={`z-150 bg-black  fixed top-0 w-full h-screen transition duration-500 lg:hidden ${
          menuOpen ? "opacity-70 right-0" : "opacity-0 translate-x-full"
        }`}
      ></div>
      <div
        className={`fixed flex justify-end w-full top-0 z-200 right-0 transition ${
          !menuOpen && "translate-x-full"
        }`}
      >
        <ul className="p-10 flex flex-col w-8/10 h-screen text-lg gap-10 text-gray-500 bg-white">
          <div className="flex justify-between">
            <img className="w-15" src="/logo.png" alt="" />
            <img
              onClick={() => setMenuOpen(false)}
              className="w-5 h-5"
              src="https://upload.wikimedia.org/wikipedia/commons/c/ca/Transparent_X.png"
              alt=""
            />
          </div>
          <li
            className={`cursor-pointer transition  ${
              activeSection === "home"
                ? "text-blue-600 hover:text-blue-800"
                : "hover:text-slate-700"
            } `}
            onClick={() => scrollToItem("home")}
          >
            Home
          </li>

          <li
            className={`cursor-pointer transition  ${
              activeSection === "characteristics"
                ? "text-blue-600 hover:text-blue-800"
                : "hover:text-slate-700"
            } `}
            onClick={() => scrollToItem("characteristics")}
          >
            I punti di forza
          </li>
          <li
            className={`cursor-pointer transition  ${
              activeSection === "reviews"
                ? "text-blue-600 hover:text-blue-800"
                : "hover:text-slate-700"
            } `}
            onClick={() => scrollToItem("reviews")}
          >
            Recensioni
          </li>
          <li
            className={`cursor-pointer transition  ${
              activeSection === "collection"
                ? "text-blue-600 hover:text-blue-800"
                : "hover:text-slate-700"
            } `}
            onClick={() => scrollToItem("collection")}
          >
            Peperelle
          </li>
          <li
            className={`cursor-pointer transition  ${
              activeSection === "faqs"
                ? "text-blue-600 hover:text-blue-800"
                : "hover:text-slate-700"
            } `}
            onClick={() => scrollToItem("faqs")}
          >
            FAQs
          </li>
          <li
            className={`cursor-pointer transition  ${
              activeSection === "newsletter"
                ? "text-blue-600 hover:text-blue-800"
                : "hover:text-slate-700"
            } `}
            onClick={() => scrollToItem("newsletter")}
          >
            Newsletter
          </li>
        </ul>
      </div>
    </>
  );
}
