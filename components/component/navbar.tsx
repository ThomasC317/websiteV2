// app/components/navbar.tsx
import Link from "next/link";
import { Button } from "../ui/button";

const Navbar = ( {isMainPage} ) => {
  return (
    <header className={`w-full bg-white bg-opacity-90 shadow-lg absolute top-0 left-0 z-50`}>
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        <nav className="flex items-center gap-8 text-sm font-medium">
        <Link href="/" className="hover:underline" prefetch={false}>
              Accueil
            </Link>
          <Link href="/work" className="hover:underline" prefetch={false}>
            Mon Travail
          </Link>
          <Link href="/about" className="hover:underline" prefetch={false}>
            À propos
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="outline">Télécharger mon CV</Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
