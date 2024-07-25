"use client";
import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { Button } from "../ui/button";
import Modal from 'react-modal';
import { AnimatedButton } from './animatedButton';
import { useTheme } from "@/components/context/themeContext";

const Contact = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const { color } = useTheme();
  const appElement = typeof document !== 'undefined' ? document.getElementById('form') : null;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSent, setIsSent] = useState(false);

  useEffect(() => {
    if (isSent) {
      const timer = setTimeout(() => {
        setIsSent(false);
        setModalIsOpen(false);
      }, 10000);
      return () => clearTimeout(timer);
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

    setModalContent("Votre mail a bien été envoyé ! Je reviens vers vous au plus vite !");
    emailjs.send(serviceID, templateID, formData, userID)
      .then(() => {
        setModalContent("Votre mail a bien été envoyé ! Je reviens vers vous au plus vite !");
        setModalIsOpen(true);
        setIsSent(true);
        e.target.reset();
      }, () => {
        setModalContent("Échec de l'envoi du mail. Veuillez réessayer plus tard.");
        setModalIsOpen(true);
        setIsSent(true);
      });
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  
  return (
    <div className="form-container" id='form'>
      <form className="contact-form grid gap-4" onSubmit={handleSubmit}>
        <div className="grid gap-2">
          <label htmlFor="name">Votre Nom</label>
          <input
            name="name"
            id="name"
            placeholder="Entrez votre nom ici"
            onChange={handleChange}
            className={`input-field bg-${color}-50 placeholder-${color}-950`}
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
            className={`input-field bg-${color}-50 placeholder-${color}-950`}
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
            className={`input-field bg-${color}-50 placeholder-${color}-950`}
            required
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Donnez plus de détails sur votre offre, demande, etc..."
            className={`textarea-field min-h-[150px] bg-${color}-50 placeholder-${color}-950`}
            onChange={handleChange}
            style={{ resize: 'none' }}
            required
          />
        </div>
        <AnimatedButton
          buttonTextColor='white'
          className={`w-full bg-${color}-950`}
          initialText={"Envoi du message"}
          changeText={"Message envoyé !"}
          buttonType="submit"
          clickStatus={isSent}
        />
      </form>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Email Status"
        appElement={appElement}
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            transform: 'translate(-50%, -50%)',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            zIndex: 1050,
            maxWidth: '500px',
            width: '90%',
            textAlign: 'center'
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1040
          },
        }}

      >
        <div style={{ marginBottom: '10px', fontSize: '2em' }}>
          {isSent ? '✅' : '❌'}
        </div>
        <h2 style={{ margin: '0', marginBottom: '10px' }}>{isSent ? 'Succès !' : 'Erreur !'}</h2>
        <p>{modalContent}</p>
        <button
          onClick={closeModal}
          style={{
            marginTop: '20px',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            padding: '10px 20px',
            cursor: 'pointer'
          }}
          className={`w-full bg-${color}-950`}
        >
          Fermer
        </button>
      </Modal>
    </div>
  );
};

export default Contact;
