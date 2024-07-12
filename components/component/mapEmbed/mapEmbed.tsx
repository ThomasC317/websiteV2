import React from 'react';
import PropTypes from 'prop-types';
import './mapEmbed.css'; // Import the CSS file for styling

const MapEmbed = ({ iframeUrl, disableInteraction }) => {
    console.log(disableInteraction)
  return (
    <div className={disableInteraction ? 'map-container no-pointer-events' : 'map-container'}>
      <iframe
        src={iframeUrl}
        width="640"
        height="480"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      ></iframe>
    </div>
  );
};

MapEmbed.propTypes = {
  iframeUrl: PropTypes.string.isRequired,
  disableInteraction: PropTypes.bool,
};

MapEmbed.defaultProps = {
  disableInteraction: false,
};

export default MapEmbed;
