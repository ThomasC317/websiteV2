"use client"
import React from 'react';
import Footer from "@/components/component/footer/footer";
import Navbar from "@/components/component/navbar";
import ParticleBackground from "@/components/component/particleBackground";
import Trema from "@/components/component/trema";
import "./not-found.css"
import { useTheme } from "@/components/context/themeContext";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const { color } = useTheme();
  const handleButtonClick = () => {
    window.location.href = "./";
  };
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar isOnMainPage={false} />
      <div className={`flex-grow relative bg-${color}-50`}>
        <ParticleBackground />
        <main className="w-full mx-auto rounded-lg px-4 sm:px-8 lg:px-24 py-12 mt-16 relative z-10">
          <div className="mb-4 flex flex-col items-center text-center">
            <div className="pt-16">
              <h1 className={`text-4xl font-bold mb-4 text-${color}-800 flex items-center justify-center`}>
                404 <Trema /> Not found
              </h1>
            </div>
            <div className="text-lg sm:text-2xl">
                Pas de panique, vous pouvez retourner à la page d'accueil ici : <br /> <br />
                </div>
                <Button
                    variant="outline"
                    className={`w-full sm:w-auto bg-${color}-950 text-${color}-50 rounded-3xl flex items-center justify-center p-6 text-lg sm:text-2xl border-0 hover:bg-${color}-950 hover:text-${color}-50`}
                    onClick={handleButtonClick}
                    
                  >
                    Accueil
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 sm:h-8 sm:w-8 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Button>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default NotFound;