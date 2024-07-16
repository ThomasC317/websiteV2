import Contact from "@/components/component/contact";
import Footer from "@/components/component/footer/footer";
import Navbar from "@/components/component/navbar";
import React from 'react';
import ParticleBackground from "@/components/component/particleBackground";
import Trema from "@/components/component/trema";

const About = () => {

    return (  
    <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <div className="flex-grow" style={{ position: "relative"}}>
            <ParticleBackground />
            <main className="w-full bg-transparent bg-opacity-80 mx-auto rounded-lg px-24 py-12 mt-24 relative z-10">
                <div className="mb-4 flex flex-col">
                    <h1 className="text-3xl font-bold mb-4 text-azure-radiance-950 flex">
                        Thomas CERDERA <Trema/> Ingénieur développeur Web 
                    </h1>
                    <p className="text-lg">
                        Ingénieur développeur Full-stack situé sur Toulouse, France.<br/><br/>
                        je travaille actuellement chez Infotel Conseil à Blagnac. J'ai choisi cette agence car elle m'a permis de réaliser des projets dans le domaine de l'aéronautique.<br/><br/>
                        J'ai une bonne maîtrise de l'anglais (920 au toeic), je suis créatif, curieux, et minutieux.
                    </p>
                </div>
<div className="border-t border-color-lightgray py-4">
                <h2 className="text-xl font-bold mb-2">Vous avez une question, ou une demande ? N'hésitez pas :</h2>
                <Contact />
                </div>
            </main>
            <Footer />
        </div>
    </div>
    );
  
};

export default About;
