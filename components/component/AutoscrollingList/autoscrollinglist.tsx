import React from 'react';
import './AutoScrollingList.css';  // Include the CSS file

const AutoScrollingList = () => {
  return (
    <div className="container">
      <h1 className="title">Bonjour, je suis Thomas. J'aime le développement !</h1>
      <div className="scrolling-list">
        <div className="scrolling-content">
          <div>J'aime le développement</div>
          <div>J'aime la musique</div>
          <div>J'aime les voyages</div>
          <div>J'aime les musées</div>
          <div>J'aime les aquariums</div>
        </div>
      </div>
    </div>
  );
};

export default AutoScrollingList;
