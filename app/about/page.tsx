import Contact from "@/components/component/contact";
import Footer from "@/components/component/footer/footer";
import Navbar from "@/components/component/navbar";
import React from 'react';
import ParticleBackground from "@/components/component/particleBackground";

const About = () => {

    return (  
    <div className="min-h-screen bg-white">
        <Navbar isMainPage={false} />
        <div style={{ position: "relative" }}>
        <ParticleBackground/>
        <main className="w-full max-w-4xl bg-transparent bg-opacity-80 mx-auto rounded-lg px-24 py-12 mt-24" style={{"position":"relative", "zIndex":1}}>
  <div className="mb-4 flex">
    <h1 className="text-3xl font-bold mb-4 text-azure-radiance-950">Bonjour, je suis Thomas. Heureux de vous voir sur mon site !</h1>
    <p className="text-lg">
      Fort de 6 années d'expérience, je suis actuellement ingénieur Développeur Web chez Infotel.<br/>
      J'ai une bonne maîtrise de l'anglais (920 au TOEIC), j'apprécie beaucoup le travail en équipe, et je sais travailler en autonomie. 
      Je suis quelqu'un de minutieux et créatif, et j'ai acquis des compétences, qui, j'en suis certain, vous seront très utiles. <br/><br/>
      En dehors de ça, je peux ajouter que j'ai un Master en ingénierie logicielle et Chefferie de projet, obtenu à l'IPI de Blagnac en 2021.
      J'ai mon permis B et je suis situé sur Toulouse.
    </p>
  </div>
  <h2 className="text-xl font-bold mb-2">Vous avez une question, ou une demande ? N'hésitez pas :</h2>
  <Contact></Contact>
</main>
        <Footer></Footer>
        </div>
        </div>);
  
  };
  
  export default About;