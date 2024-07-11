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
        <main className="w-full max-w-4xl bg-transparent bg-opacity-80 mx-auto rounded-lg px-24 py-12 mt-16" style={{"position":"relative", "zIndex":1}}>
            <div  className="mb-4 flex">
            <p className="">
              Je m'appelle Thomas CERDERA, j'ai 27 ans. J'ai commencé ma carrière en tant qu'alternant développeur Windev en License, mais la technologie ne m'a pas absolument pas plu. (grande surprise pour les développeurs qui me liront)<br/><br/>
              J'ai malgré tout réussi à avoir ma license et j'ai trouvé une alternance pour suivre le master Chef de projet ingénierie Logicielle à l'IPI de Blagnac, branche informatique
              du groupe IGS. Durant ces deux années, j'ai appris énormément, j'ai pris confiance en moi et j'ai pu travailler sur des projets intéressants. <br/><br/>

              Je suis maintenant ingénieur Développeur Web, actuellement chez Infotel, ESN travaillant avec de gros clients, et j'ai déjà réalisés quelques projets pour cette entreprise.<br/>

              En dehors de cela, j'ai une bonne maîtrise de l'anglais (920 au TOEIC), j'ai regardé beaucoup de séries en anglais et j'ai été aidé par mes différents voyages.<br/><br/>

              J'apprécie beaucoup le travail en équipe, mais quand il le faut je sais aussi travailler en autonomie. Je suis aussi minutieux et créatif, 
              et j'ai acquis des compétences, qui, j'en suis certain, vous seront très utiles.
            </p>
          </div>
        <h2>Vous pouvez aussi me contacter directement ici :</h2>
        <Contact></Contact>
        </main>
        <Footer></Footer>
        </div>
        </div>);
  
  };
  
  export default About;