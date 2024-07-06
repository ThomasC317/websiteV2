"use client"
import { Button } from "@/components/ui/button"
import Typical from 'react-typical';
import Navbar from "@/components/component/navbar"
import CommandPrompt from "@/components/component/commandPrompt"
import React, { useState, useEffect } from 'react';


const Home = () => {
const handleButtonClick = () => {
  window.location.href = '/work';
};
const [isTyping, setIsTyping] = useState(true);

useEffect(() => {
  const typingInterval = setInterval(() => {
    setIsTyping(prev => !prev);
  }, 9000); // Adjust this timing to match the total duration of the typing animation

  return () => clearInterval(typingInterval);
}, []);

  return (
    <div className="min-h-screen flex gap-main-page items-center justify-center py-12 bg-gray-100">
      <Navbar/>
      <div className="w-full max-w-4xl bg-white bg-opacity-80 p-8 md:p-12 lg:p-16 rounded-lg shadow-lg mt-24">
        <main className="flex flex-col gap-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Bonjour, je m'appelle Thomas {' '}
                <Typical
                  steps={[
                    'C', 500,
                    'CE', 500,
                    'CER', 500,
                    'CERD', 500,
                    'CERDE', 500,
                    'CERDER', 500,
                    'CERDERA', 500,
                  ]}
                  loop={1}
                  wrapper="span"
                />
            </h1>
            <p className="text-lg text-gray-700 md:text-xl lg:text-2xl">
              Je suis un développeur Full-Stack, actuellement très intéressé pour développer mes compétences en Front.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button variant="outline" className="w-full sm:w-auto" onClick={handleButtonClick}>
              Mon travail
            </Button>
            <Button variant="outline" className="w-full sm:w-auto" style={{ backgroundColor: 'black', color: 'white' }}>
              Télécharger mon CV
            </Button>
          </div>
        </main>
      </div>
      <div className="w-full max-w-2xl bg-white bg-opacity-80 p-8 md:p-12 lg:p-16 rounded-lg shadow-lg mt-12">
        <div className="mx-auto space-y-8">
        <CommandPrompt />
        </div>
      </div>
    </div>);


}
export default Home;