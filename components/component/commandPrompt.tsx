import React, { useState, useEffect } from 'react';
import { Properties } from 'csstype';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const CommandPrompt = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<any[]>([]);
  const [currentTime, setCurrentTime] = useState('');

  type Styles = {
    container: Properties;
    outputContainer: Properties;
    output: Properties;
    outputEntry: Properties;
    command: Properties;
    form: Properties;
    input: Properties;
    button: Properties;
    iconWrapper: Properties;
    icon: Properties;
  };

  const styles: Styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      fontFamily: 'monospace',
      backgroundColor: '#1e1e1e',
      color: '#dcdcdc',
      padding: '20px',
      borderRadius: '10px',
      height: '40rem',
      border: '1px solid #333',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
    },
    outputContainer: {
      flex: 1,
      overflowY: 'auto',
      marginBottom: '20px',
    },
    output: {
      display: 'flex',
      flexDirection: 'column',
    },
    outputEntry: {
      marginBottom: '10px',
    },
    command: {
      color: '#00ff00',
    },
    form: {
      display: 'flex',
      alignItems: 'center',
    },
    input: {
      flex: 1,
      padding: '10px',
      backgroundColor: '#000',
      color: '#fff',
      border: '1px solid #00ff00',
      borderRadius: '5px',
      fontSize: '16px',
      outline: 'none',
    },
    button: {
      position: 'absolute',
      right: '10px',
      top: '50%',
      transform: 'translateY(-50%)',
      backgroundColor: 'transparent',
      border: 'none',
      cursor: 'pointer',
      padding: '0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    iconWrapper: {
      border: '1px solid #00ff00',
      borderRadius: '50%',
      padding: '5px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    icon: {
      border: '1px solid #00ff00',
      borderRadius: '50%',
      padding: '5px',
    },
  };

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

  useEffect(() => {
    // Set the initial time once the component is mounted on the client
    setCurrentTime(getFormattedDate());

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
      <div style={styles.outputContainer}>
        <div style={styles.output}>
          <div style={styles.outputEntry}>
            {'>'} Bonjour et bienvenue sur mon site Web ! <br />
            {'>'} {currentTime}
          </div>
          {output.map((entry, index) => (
            <div key={index} style={styles.outputEntry}>
              <div style={styles.command}>{entry.command ? `> ${entry.command}` : ''}</div>
              <div>{renderOutput(entry.result)}</div>
            </div>
          ))}
        </div>
      </div>
      <form onSubmit={handleInputSubmit} style={styles.form}>
        <div style={{ position: 'relative', width: '100%' }}>
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            style={{ ...styles.input, paddingRight: '40px', width: '100%' }}
          />
          <button type="submit" style={{ ...styles.button }}>
            <span style={{ marginRight: "0.5rem" }}>
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommandPrompt;
