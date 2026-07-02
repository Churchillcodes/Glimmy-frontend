import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Catalogue", path: "/catalogue" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-glimmy-cream/95 backdrop-blur shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
        <Link
          to="/"
          className="font-heading text-xl font-semibold text-glimmy-walnut"
        >
          Glimmy
        </Link>

        {/* Desktop links */}
        <nav className="hidden md:flex gap-8 font-medium">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="hover:text-glimmy-walnut transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <nav className="md:hidden flex flex-col gap-4 px-4 pb-4 font-medium">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Navbar;
