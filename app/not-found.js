// pages/404.js

import React from 'react';
import Link from 'next/link';
import Contact from "@/components/component/contact";
import Footer from "@/components/component/footer/footer";
import Navbar from "@/components/component/navbar";
import ParticleBackground from "@/components/component/particleBackground";
import Trema from "@/components/component/trema";
import "./not-found.css"

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar isOnMainPage={false} />
      <div className="flex-grow relative">
        <ParticleBackground />
        <main className="w-full bg-transparent bg-opacity-80 mx-auto rounded-lg px-4 sm:px-8 lg:px-24 py-12 mt-16 relative z-10">
          <div className="mb-4 flex flex-col items-center text-center">
            <div className="pt-16">
              <h1 className="text-4xl font-bold mb-4 text-azure-radiance-950 flex items-center justify-center">
                404 <Trema /> Not found
              </h1>
            </div>
            <div className="mt-8">
              <Link href="/" className='underline-link text-azure-radiance-500 text-lg'>Retourner à l'accueil</Link>
            </div>
            <div className="mt-4">
              <Link href="/work" className='underline-link text-azure-radiance-500 text-lg'>Mon travail</Link>
            </div>
            <div className="mt-4">
              <Link href="/about" className='underline-link text-azure-radiance-500 text-lg'>À propos</Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default NotFound;