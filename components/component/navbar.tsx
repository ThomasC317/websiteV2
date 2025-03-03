"use client"
// app/components/navbar.tsx
import Link from "next/link";
import { Button } from "../ui/button";
import { useState, useRef, useEffect } from 'react';
import ColorPicker from "./colorPicker";
import { useTheme } from "@/components/context/themeContext";

type MyComponentProps = {
  isOnMainPage?: boolean | null;
};

const Navbar: React.FC<MyComponentProps> = ({ isOnMainPage = null }) => {
  if (isOnMainPage === null) {
    isOnMainPage = false;
  }
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { color } = useTheme();
  const toggleMenu = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      menuRef.current && !menuRef.current.contains(event.target as Node) &&
      buttonRef.current && !buttonRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const openPdf = () => {
    window.open("/CV_CERDERA_Thomas_2024.pdf");
  };

  return (
<header className={`w-full bg-${color}-50 absolute top-0 left-0 z-50`}>
  <div className="max-w-7xl mx-auto px-8 py-8 flex items-center justify-between">
    {/* Desktop Navigation */}
    <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
      <Link href="/" className={`navbar-link hover:bg-${color}-100`} prefetch={false}>
        Accueil
      </Link>
      <Link href="/work" className={`navbar-link hover:bg-${color}-100`} prefetch={false}>
        Mon Travail
      </Link>
      <Link href="/about" className={`navbar-link hover:bg-${color}-100`} prefetch={false}>
        À propos
      </Link>
      <ColorPicker />
      <Button
        variant="outline"
        className={`absolute w-full sm:w-auto bg-${color}-50  text-white rounded-3xl flex items-center justify-center px-6 py-6 xl:text-lg text-sm border hover:bg-${color}-200 button-hover`} style={{ borderWidth: '1px',right:"10rem"}} onClick={openPdf}
      >
        Télécharger mon CV
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
          <path d="M210.78,39.25l-130.25-23A16,16,0,0,0,62,29.23l-29.75,169a16,16,0,0,0,13,18.53l130.25,23h0a16,16,0,0,0,18.54-13l29.75-169A16,16,0,0,0,210.78,39.25ZM178.26,224h0L48,201,77.75,32,208,55ZM89.34,58.42a8,8,0,0,1,9.27-6.48l83,14.65a8,8,0,0,1-1.39,15.88,8.36,8.36,0,0,1-1.4-.12l-83-14.66A8,8,0,0,1,89.34,58.42ZM83.8,89.94a8,8,0,0,1,9.27-6.49l83,14.66A8,8,0,0,1,174.67,114a7.55,7.55,0,0,1-1.41-.13l-83-14.65A8,8,0,0,1,83.8,89.94Zm-5.55,31.51A8,8,0,0,1,87.52,115L129,122.29a8,8,0,0,1-1.38,15.88,8.27,8.27,0,0,1-1.4-.12l-41.5-7.33A8,8,0,0,1,78.25,121.45Z"></path>
        </svg>
      </Button>
    </nav>

    {/* Mobile Menu Button */}
    <div className="md:hidden flex items-center">
      <button
        ref={buttonRef}
        onClick={toggleMenu}
        className="text-gray-800 focus:outline-none"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
        </svg>
      </button>
    </div>
  </div>

  {/* Mobile Navigation Menu */}
  {isOpen && (
    <div
      ref={menuRef}
      className={`md:hidden bg-${color}-50 shadow-lg menu-animation`}
    >
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
        <ColorPicker />
        <Button
          variant="outline"
          className={`w-full sm:w-auto bg-${color}-50 text-white rounded-3xl flex items-center justify-center p-6 xl:text-lg text-sm border hover:bg-${color}-200 button-hover`} style={{ borderWidth: "1px" }} onClick={openPdf}
        >
          Télécharger mon CV
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
            <path d="M210.78,39.25l-130.25-23A16,16,0,0,0,62,29.23l-29.75,169a16,16,0,0,0,13,18.53l130.25,23h0a16,16,0,0,0,18.54-13l29.75-169A16,16,0,0,0,210.78,39.25ZM178.26,224h0L48,201,77.75,32,208,55ZM89.34,58.42a8,8,0,0,1,9.27-6.48l83,14.65a8,8,0,0,1-1.39,15.88,8.36,8.36,0,0,1-1.4-.12l-83-14.66A8,8,0,0,1,89.34,58.42ZM83.8,89.94a8,8,0,0,1,9.27-6.49l83,14.66A8,8,0,0,1,174.67,114a7.55,7.55,0,0,1-1.41-.13l-83-14.65A8,8,0,0,1,83.8,89.94Zm-5.55,31.51A8,8,0,0,1,87.52,115L129,122.29a8,8,0,0,1-1.38,15.88,8.27,8.27,0,0,1-1.4-.12l-41.5-7.33A8,8,0,0,1,78.25,121.45Z"></path>
          </svg>
        </Button>
      </nav>
    </div>
  )}
</header>
  );
};

export default Navbar;
