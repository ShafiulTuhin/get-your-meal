import { Menu, SquareX } from "lucide-react";

const Navbar = ({ link, isMenuOpen, handleMenu }) => {
  return (
    <nav className="flex justify-between items-center py-5 px-10 shadow-xl mb-5">
      <div className="flex gap-4">
        <button className="md:hidden" onClick={handleMenu}>
          {isMenuOpen ? "" : <Menu />}
        </button>

        <p className="font-bold text-3xl">
          Ayd<span className="text-purple-600">aa</span>h
        </p>
      </div>

      <ul className="">
        <li className="md:flex hidden gap-10">{link}</li>
      </ul>
      <ul
        className={`fixed top-0 left-0 w-8/12 h-screen bg-purple-600 opacity-90 
            flex flex-col p-6 pt-24 items-center gap-6 text-white text-xl 
          transform transition-transform duration-500 ease-in-out md:hidden z-40
          ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Close button inside menu */}
        <button onClick={handleMenu} className="absolute top-6 left-7">
          <SquareX size={32} />
        </button>

        {link}
      </ul>
      <button className="bg-purple-600 py-2 px-3 text-white rounded-lg cursor-pointer">
        Login
      </button>
    </nav>
  );
};

export default Navbar;
