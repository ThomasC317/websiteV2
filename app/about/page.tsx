import Contact from "@/components/component/contact";
import Footer from "@/components/component/footer/footer";
import Navbar from "@/components/component/navbar";
import React from 'react';
import Trema from "@/components/component/trema";

const About = () => {

    return (  <div className="min-h-screen bg-white">
    <div className="min-h-screen flex gap-main-page items-center justify-center py-12 bg-gray-100">
        <Navbar />
        <div className="w-full max-w-4xl bg-white bg-opacity-80 p-8 md:p-12 lg:p-16 rounded-lg">
        <div className="py-4">
            <div  className="mb-4 flex">
            
            <a href="https://www.linkedin.com/in/thomas-cerdera-305ab3153/" className="underline-link"> Linkedin </a>
            <Trema/>
                    <p className="ml-2">
                      Vous pouvez retrouver le lien de mon linkedin.
                    </p>
      
             
              </div>
              <div  className="mb-4 flex">
            
            <a href="https://github.com/ThomasC317" className="underline-link"> Github </a>
            <Trema/>
                <p className="ml-2">
                  Liste de projets personnel sur lesquels j'ai pu travailler.
                </p>
               
                
          </div>
          <div  className="mb-4 flex">

                <p>
                    
                  Je vis actuellement à           <a href="https://www.google.fr/maps/place/Toulouse/@43.600798,1.3504412,12z/data=!3m1!4b1!4m6!3m5!1s0x12aebb6fec7552ff:0x406f69c2f411030!8m2!3d43.604652!4d1.444209!16zL20vMGNiaGg?entry=ttu" className="underline-link">Toulouse</a>et j'ai mon permis B.
                </p>          
          </div>
          </div>
        <h2 className="">Vous pouvez aussi me contacter directement ici :</h2>
        <Contact></Contact>
        </div>
        </div>
        <Footer></Footer>
        </div>);
  
  };
  
  export default About;