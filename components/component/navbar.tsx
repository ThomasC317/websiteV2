"use client"
// app/components/navbar.tsx
import Link from "next/link";
import { Button } from "../ui/button";
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
  
    <header className="w-full bg-white bg-opacity-90 shadow-lg absolute top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
          <Link href="/" className="navbar-link" prefetch={false}>
            Accueil
          </Link>
          <Link href="/work" className="navbar-link" prefetch={false}>
            Mon Travail
          </Link>
          <Link href="/about" className="navbar-link" prefetch={false}>
            À propos
          </Link>
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline">Télécharger mon CV</Button>
        </div>
        <div className="max-md:flex items-center hidden">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white bg-opacity-90 shadow-lg">
          <nav className="px-8 py-4 flex flex-col gap-4 text-sm font-medium">
            <Link href="/" className="navbar-link" prefetch={false}>
              Accueil
            </Link>
            <Link href="/work" className="navbar-link" prefetch={false}>
              Mon Travail
            </Link>
            <Link href="/about" className="navbar-link" prefetch={false}>
              À propos
            </Link>
            <Button variant="outline" className="w-full">Télécharger mon CV</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
