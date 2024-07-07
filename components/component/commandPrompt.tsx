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
    setOutput(prevOutput => {
      if (!prevOutput.some(entry => entry.command === 'command')) {
        return [...prevOutput, { command: 'command', result: getCommandResult('command') }];
      }
      return prevOutput;
    });
  
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
    if (input.trim().toLowerCase() !== 'command') {
      processCommand(input.trim());
    }
    setInput('');
  };

  const getCommandResult = (command) => {
    switch (command) {
      case 'hello':
        return '> Hello, World!';
      case 'presentation':
        return `> Je m'appelle Thomas, j'ai 27 ans et je suis Ingénieur développeur. \n > J'aime la photographie, la musique, le cinéma, les voyages...`;
      case 'experiences':
        return `> Je suis actuellement chez Infotel en tant qu'ingénieur développeur, et ceci depuis Septembre 2023. Avant cela j'ai travaillé pour LP Promotion, 2 ans en tant qu'alternant en Ingénierie logicielle et Chiefferie de projet, et deux ans en CDI en tant qu'ingénieur développeur. Vous pouvez trouver plus de détails dans la partie "Mon Travail"`;
      case 'technologies':
        return `> J'ai récemment découvert le React, avec du Next.js et j'ai beaucoup apprécié, d'où la création de ce site. En dehors de ça, je maîtrise (plus ou moins) l'Angular, les technologies .NET... Vous pouvez trouver plus de détails dans la partie "Mon Travail".`;
      case 'animals':
        return `> J'ai actuellement un chat, qui s'appelle Tia ! Elle a deux ans !`;
      case 'travels':
        return `> Le dernier voyage que j'ai fait était l'année dernière, je suis parti en Norvège ! \n > Vous pouvez trouver plus de détails dans la partie "Blog".`;
      case 'contact':
        return `> Vous pouvez trouver toutes les infos pour me contacter dans la partie "Contact".`;
      case 'command':
        return `> Voici la liste des commandes : \n > - hello \n > - presentation \n > - experiences \n > - technologies \n > - animals \n > - travels \n > - contact`;
      default:
        return `> Commande non reconnue: ${command}`;
    }
  };

  const processCommand = (command) => {
    const result = getCommandResult(command);
    // Update the output state
    setOutput((prevOutput) => [...prevOutput, { command, result }]);
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
