import React, { useState, useEffect } from 'react';

const CommandPrompt = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([]);


  const getFormattedDate = () => {
    const months = [
      "janvier", "février", "mars", "avril", "mai", "juin",
      "juillet", "août", "septembre", "octobre", "novembre", "décembre"
    ];
  
    const date = new Date();
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
  
    const formattedDate = `Nous sommes le ${day} ${month} ${year} et il est actuellement ${hours}:${minutes}:${seconds}`;
  
    return formattedDate;
  };
  const [currentTime, setCurrentTime] = useState(getFormattedDate());
  useEffect(() => {
    // Initialize output with the list of commands on component mount
    processCommand('command');
    
    // Set interval to update current time every second
    const interval = setInterval(() => {
      setCurrentTime(getFormattedDate());
    }, 1000);

    return () => {
      clearInterval(interval); // Cleanup interval on component unmount
    };
  }, []);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleInputSubmit = (event) => {
    event.preventDefault();
    processCommand(input.trim());
    setInput('');
  };

  const processCommand = (command) => {
    let newOutput = [];
    let result;

    switch (command) {
      case 'hello':
        result = '> Hello, World!';
        break;
      case 'presentation':
        result = `> Je m'appelle Thomas, j'ai 27 ans et je suis Ingénieur développeur. \n > J'aime la photographie, la musique, le cinéma, les voyages...`;
        break;
      case 'technologies':
        result = `> J'ai récemment découvert le React, avec du Next.js et j'ai beaucoup apprécié, d'où la création de ce site. En dehors de ça, je maîtrise (plus ou moins) l'Angular, les technologies .NET... Vous pouvez trouver plus de détails dans la partie "Mon Travail".`;
        break;
      case 'animals':
        result = `> J'ai actuellement un chat, qui s'appelle Tia ! Elle a deux ans !`;
        break;
      case 'travels':
        result = `> Le dernier voyage que j'ai fait était l'année dernière, je suis parti en Norvège ! \n > Vous pouvez trouver plus de détails dans la partie "Blog".`;
        break;
      case 'contact':
        result = `> Vous pouvez trouver toutes les infos pour me contacter dans la partie "Contact".`;
        break;
      case 'command':
        result = `> Voici la liste des commandes : \n > - hello \n > - date \n > - presentation \n > - technologies \n > - animals \n > - travels \n > - contact \n > - clear`;
        break;
      default:
        result = `> Commande non reconnue: ${command}`;
    }

    // Update the output state
    setOutput([...newOutput, { command, result }]);
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
        <div>
          > Bonjour et bienvenue sur mon site Web ! <br />
          > {currentTime}
        </div>
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
    color: '#fff',
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
    color: '#fff',
    border: '1px solid #fff',
    borderRadius: '5px'
  }
};

export default CommandPrompt;
