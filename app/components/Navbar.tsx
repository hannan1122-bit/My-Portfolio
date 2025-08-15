"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.querySelector(id);
    if (target) {
      const navbarHeight = 80; // adjust if your navbar height changes
      const elementPosition = target.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-red-950 to-black text-white fixed w-full z-50 shadow-lg font-poppins border border-red-700 rounded-md">
      <div className="max-w-6xl mx-auto px-4 py-5 flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Portfolio</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-12 mx-auto text-lg font-bold">
          <li><a href="#introduction" onClick={(e) => handleScroll(e, "#introduction")} className="hover:text-gray-300 transition">Introduction</a></li>
          <li><a href="#certifications" onClick={(e) => handleScroll(e, "#certifications")} className="hover:text-gray-300 transition">Certifications</a></li>
          <li><a href="#projects" onClick={(e) => handleScroll(e, "#projects")} className="hover:text-gray-300 transition">Projects</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 px-4 py-4 font-bold">
          <ul className="flex flex-col gap-4 text-lg">
            <li><a href="#introduction" onClick={(e) => handleScroll(e, "#introduction")} className="hover:text-gray-300">Introduction</a></li>
            <li><a href="#certifications" onClick={(e) => handleScroll(e, "#certifications")} className="hover:text-gray-300">Certifications</a></li>
            <li><a href="#projects" onClick={(e) => handleScroll(e, "#projects")} className="hover:text-gray-300">Projects</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
