"use client";
import React, { useState,useEffect } from 'react';
import emailjs from 'emailjs-com';
import { Button } from "../ui/button";
import { AnimatedButton } from './animatedButton';
const Contact = ()=> {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSent, setIsSent] = useState(false);

  useEffect(() => {
    if(isSent)
    {
    setInterval(() => {
      setIsSent(false);
    }, 10000);
  }
}, [isSent]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = 'service_uyz2ik9';
    const templateID = 'template_d0tm9og';
    const userID = 'v-idG3pMsjd8JrlQl';
    emailjs.send(serviceID, templateID, formData, userID)
      .then(() => {
        window.alert('Votre mail a bien été envoyé ! Je reviens vers vous au plus vite !');
        setIsSent(true)
      }, () => {
        window.alert(`Echec de l'envoi du mail. Veuillez réessayer plus tard.`);
        setIsSent(true)
      });
  };


  return (
    <div className="form-container" onSubmit={handleSubmit}>
      <form className="contact-form grid gap-4">
        <div className="grid gap-2">
          <label htmlFor="name">Votre Nom</label>
          <input
            name="name"
            id="name"
            placeholder="Entrez votre nom ici"
            onChange={handleChange}
            className="input-field"
            required
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="email">Votre Email</label>
          <input
            name="email"
            id="email"
            type="email"
            placeholder="Entrez votre mail ici"
            onChange={handleChange}
            className="input-field"
            required
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="subject">Sujet du contact</label>
          <input
            name="subject"
            id="subject"
            placeholder="Décrivez de façon brève la raison de votre message"
            onChange={handleChange}
            className="input-field"
            required
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Donnez plus de détails sur votre offre, demande, etc..."
            className="textarea-field min-h-[150px]"
            onChange={handleChange}
            style={{resize:'none'}}
            required
          />
        </div>
        <AnimatedButton buttonTextColor='white' className='bg-azure-radiance-950 w-full' initialText={"Envoi du message"} changeText={"message envoyé !"} buttonType="submit" clickStatus={isSent} />
      </form>
    </div>
  );
}

export default Contact;