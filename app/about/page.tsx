import Contact from "@/components/component/contact";
import Footer from "@/components/component/footer/footer";
import Navbar from "@/components/component/navbar";
import React from 'react';
import Trema from "@/components/component/trema";

const About = () => {

    return (  <div className="min-h-screen bg-white">
    <div className="min-h-screen flex gap-main-page items-center justify-center py-12 bg-gray-100">
        <Navbar />
        <div className="w-full max-w-4xl bg-white bg-opacity-80 mx-auto mt-16 rounded-lg">
            <div  className="mb-4 flex">
            <p className="">
              Je m'appelle Thomas CERDERA, j'ai 27 ans. J'ai commencé ma carrière en tant qu'alternant développeur Windev en License, mais ça ne m'a pas plu. <br/><br/>
              J'ai malgré tout perséveré et j'ai trouvé une alternance pour suivre le master Chef de projet ingénierie Logicielle à l'IPI de Blagnac, branche informatique
              du groupe IGS. Durant ces deux années, j'ai appris énormément, j'ai pris confiance en moi et j'ai pu travailler sur des projets intéressants. <br/><br/>

              Je suis maintenant ingénieur Développeur Web, actuellement chez Infotel, ESN travaillant avec de gros clients, et j'ai déjà réalisés quelques projets pour cette entreprise.<br/>

              En dehors de cela, j'ai une bonne maîtrise de l'anglais (920 au TOEIC), j'ai regardé beaucoup de séries en anglais et j'ai été aidé par mes différents voyages.<br/><br/>

              J'apprécie beaucoup le travail en équipe, mais quand il le faut je sais aussi travailler en autonomie. Je suis aussi minutieux et créatif, 
              et j'ai acquis des compétences, qui, j'en suis certain, vous seront très utiles.
            </p>
          </div>
        <h2>Vous pouvez aussi me contacter directement ici :</h2>
        <Contact></Contact>
        </div>
        </div>
        <Footer></Footer>
        </div>);
  
  };
  
  export default About;