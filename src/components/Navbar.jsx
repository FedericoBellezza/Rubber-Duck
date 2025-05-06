export default function Navbar() {
  return (
    <nav className="bg-white px-10 py-3 flex justify-between items-center">
      <img src="/logo.png" alt="duck logo" />
      <ul className="flex text-lg gap-10 text-gray-500">
        <li>Home</li>
        <li>I punti di forza</li>
        <li>Recensioni</li>
        <li>Peperelle</li>
        <li>FAQs</li>
        <li>Newsletter</li>
      </ul>
    </nav>
  );
}
