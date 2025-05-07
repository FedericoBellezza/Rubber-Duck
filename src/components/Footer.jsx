"use client";

export default function Footer() {
  return (
    <section className="flex text-center justify-center items-center py-10 bg-white lg:text-md text-sm px-10">
      <h4>
        © 2025 Rubber Ducks. Designed by{" "}
        <span
          onClick={() =>
            window.open("https://www.linkedin.com/in/federico-bellezza21/")
          }
          className="text-green-500 cursor-pointer hover:text-green-600 transition"
        >
          Federico Bellezza
        </span>
      </h4>
    </section>
  );
}
