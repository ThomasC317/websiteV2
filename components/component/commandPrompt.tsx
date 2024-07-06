"use client"
import React, { useState } from 'react';

const CommandPrompt = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([
    { command: '', result: '> Bienvenue sur mon site web ! \n > Voici la liste des commandes : \n > - hello \n > - date \n > - presentation \n > - technologies \n > - animals \n > - travels \n > - contact' }
  ]);
  
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleInputSubmit = (event) => {
    event.preventDefault();
    processCommand(input);
    setInput('');
  };

  const processCommand = (command) => {
    let result;
    switch (command) {
      case 'hello':
        result = 'ThomasCerdera> Hello, World!';
        break;
      case 'date':
        result = new Date().toString();
        break;
    case 'presentation':
        result = `> Je m'appelle Thomas, j'ai 27 ans et je suis Ingénieur développeur. \n > J'aime la photographie, la musique, le cinéma, les voyages...`
        break;
    case 'technologies':
        result = `> J'ai récement découvert le React, avec du nextJs et j'ai beaucoup apprécié, d'ou la création de ce site. En dehors de ça je maîtrise (plus ou moins) l'Angular, les technologies .NET... Vous pouvez trouver plus de détails dans la partie "Mon Travail"`;
        break;
    case 'animals':
        result = `> J'ai actuellement un chat, qui s'appelle Tia ! elle a deux ans !`;
        break;
    case 'travels': 
        result = `> Le dernier voyage que j'ai fait était l'année dernière, je suis parti en norvège ! \n > Vous pouvez trouver plus de détails dans la partie "Blog"`;
        break;
    case 'contact':
        result = `> Vous pouvez trouver toute les infos pour me contacter dans la partie "Contact`;
        break;
      default:
        result = `> Commande non reconnue: ${command}`;
    }
    setOutput([...output, { command, result }]);
  };

  const renderOutput = (text) => {
    return text.split('\n').map((item, index) => (
      <React.Fragment key={index}>
 {item}
        <br />
      </React.Fragment>
    ));
  };

  return (
    <div style={styles.container}>
      <div style={styles.output}>
        {output.map((entry, index) => (
          <div key={index}>
            <div>{entry.command ? `> ${entry.command}` : ''}</div>
            <div>{renderOutput(entry.result)}</div>
          </div>
        ))}
      </div>
      <form onSubmit={handleInputSubmit} style={styles.form}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          style={styles.input}
        />
      </form>
    </div>
  );
};

const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      fontFamily: 'monospace',
      backgroundColor: '#000',
      color: '#0f0',
      padding: '10px',
      borderRadius: '5px',
      height: '40rem',
    },
    output: {
      flex: 1,
      overflowY: 'auto',
      marginBottom: '10px'
    },
    form: {
      display: 'flex'
    },
    input: {
      flex: 1,
      padding: '10px',
      backgroundColor: '#000',
      color: '#0f0',
      border: '1px solid #0f0',
      borderRadius: '5px'
    }
  };

export default CommandPrompt;
