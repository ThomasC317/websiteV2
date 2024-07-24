"use client"
import Contact from "@/components/component/contact";
import Footer from "@/components/component/footer/footer";
import Navbar from "@/components/component/navbar";
import React from "react";
import ParticleBackground from "@/components/component/particleBackground";
import Trema from "@/components/component/trema";
import { useTheme } from "@/components/context/themeContext";

const About = () => {
  const { color } = useTheme();
  return (
<div className="min-h-screen flex flex-col bg-white">
  <Navbar isOnMainPage={false} />
  <div className="flex-grow relative">
    <ParticleBackground />
    <main className={`w-full bg-${color}-50 mx-auto rounded-lg px-4 sm:px-8 lg:px-24 py-12 mt-16 relative z-10`}>
      <div className="mb-4 flex flex-col">
        <h1 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-${color}-950 flex flex-wrap`}>
          Thomas CERDERA <Trema /> Ingénieur développeur Web
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl">
          Ingénieur développeur Full-stack situé sur Toulouse, France.
          <br />
          <br /> Je suis un développeur full stack passionné travaillant
          actuellement chez Infotel. Mon rôle me permet de me concentrer
          pleinement sur la création de solutions web performantes qui
          répondront à vos besoins.
          <br />
          <br />
          J'ai une bonne maîtrise de l'anglais (920 au TOEIC), je suis
          créatif, curieux, et minutieux.
        </p>
      </div>
      <div className="border-t border-color-lightgray py-4">
        <h2 className={`text-lg sm:text-xl lg:text-2xl text-${color}-950 mb-2 font-bold`}>
          Vous avez une question, ou une demande ? N'hésitez pas :
        </h2>
        <Contact />
      </div>
    </main>
    <Footer />
  </div>
</div>
  );
};

export default About;
