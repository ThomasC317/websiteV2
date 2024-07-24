import React, { useState, useEffect } from 'react';
import { Properties } from 'csstype';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { comma } from 'postcss/lib/list';

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
    setCurrentTime(getFormattedDate());

    setOutput(prevOutput => {
      if (!prevOutput.some(entry => entry.command === 'command')) {
        return [...prevOutput, { command: 'command', result: getCommandResult('command') }];
      }
      return prevOutput;
    });

    const interval = setInterval(() => {
      setCurrentTime(getFormattedDate());
    }, 1000);

    return () => {
      clearInterval(interval);
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
    switch (command.toLowerCase()) {
      case 'hello':
        return '> Hello, World!';
      case 'presentation':
      case 'présentation':
        return `> Je m'appelle Thomas, j'ai 27 ans et je suis Ingénieur développeur. <br /> > J'aime la photographie, la musique, le cinéma, les voyages...`;
      case 'experiences':
      case 'expériences':
        return `> Je suis actuellement chez Infotel en tant qu'ingénieur développeur, et ceci depuis Septembre 2023. Avant cela j'ai travaillé pour LP Promotion, 2 ans en tant qu'alternant en Ingénierie logicielle et Chiefferie de projet, et deux ans en CDI en tant qu'ingénieur développeur. Vous pouvez trouver plus de détails dans la partie "<a href='./work' style='color: #00ff00; text-decoration: underline;'>Mon Travail</a>"`;
      case 'technologies':
      case 'technos':
        return `> J'ai récemment découvert le React, avec du Next.js et j'ai beaucoup apprécié, d'où la création de ce site. En dehors de ça, je maîtrise (plus ou moins) l'Angular, les technologies .NET... Vous pouvez trouver plus de détails dans la partie "Mon Travail".`;
      case 'animals':
      case 'animaux':
        return `> J'ai actuellement un chat, qui s'appelle Tia ! Elle a deux ans ! <br/> <img src="././tia.jpg" alt="tia"/>`;
      case 'travels':
      case 'voyages':
        return `> Le dernier voyage que j'ai fait était l'année dernière, je suis parti en Norvège ! Sinon j'ai déjà été en Croatie, en Espagne, en Italie...`;
      case 'contact':
        return `> Vous pouvez trouver toutes les infos pour me contacter dans la partie "<a href='./about' style='color: #00ff00; text-decoration: underline;'>À propos</a>"`;
      case 'hack':
        return `> Je ne suis pas un vrai terminal, vous ne pouvez pas me hacker ! <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExanJ4aWxvc212cWJydzFtcnduZ2o4MWc0MnA2amtxZGk4NWNnb240MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/132E7fAngjFxII/200.webp" alt="no no no`;
      case 'kill':
        setOutput([]); // Clear the output
        return `<img src="https://media.giphy.com/media/uC8SQoaY5EHhC/giphy.gif" alt="fun gif" />`;
      case 'facts':
        return `> Voici quelques facts à propos de moi : <br/>
        ✅ Je suis un Développeur web ! <br />
        ✅ J'adore les océans et l'espace ! <br /> 
        ✅ Je suis fan d'animaux ! <br />
        ✅ J'adore me faire des petits plats ! <br />`;
      case 'clear':
        setOutput([]);
        return `Clean du prompt ! <br /><img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExamgxMW5mNnhkcThvcHdjYXAwZ2ZicjM4aXQxMzgwZnpoMXQweGphNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lvNwcFPKl3ujS/giphy.webp" alt="clean` 
      case 'command':
      case 'commands':
        return `> Voici la liste des commandes : <br /> 
        > - hello <br /> 
        > - présentation <br /> 
        > - expériences <br /> 
        > - technologies <br /> 
        > - animaux <br /> 
        > - voyages <br /> 
        > - contact <br />
        > - hack <br /> 
        > - kill <br />
        > - facts <br />
        > - clear <br />
        > - commands <br />`;
      
      default:
        return `> Commande non trouvée ! : ${command} <br/> <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExY3k0cGh4MjV4bzNjM3VuN2hpcjU0NGhuMHRyenN6MDBwZmVxdHQ1bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/14uQ3cOFteDaU/giphy.webp" alt="unknown command gif" />`;
    }
  };

  const processCommand = (command) => {
    const result = getCommandResult(command);
    setOutput((prevOutput) => [...prevOutput, { command, result }]);
  };

  const renderOutput = (text) => {
    return <span dangerouslySetInnerHTML={{ __html: text }} />;
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
