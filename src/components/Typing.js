import React from 'react';
import PropTypes from 'prop-types';
import { FaCircle } from 'react-icons/fa';

function Typing({ from, typing }) {
  return (
    <li>
      <div className="message-data">
        <span className="message-data-name">
          <FaCircle className="another-person" /> {from.name}
        </span>
        <span className="message-data-time">{typing.time}</span>
      </div>
      <div className="typing">
        <FaCircle className="another-person" />
        <FaCircle className="another-person" />
        <FaCircle className="another-person" />
      </div>
    </li>
  );
}

Typing.propTypes = {
  from: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  typing: PropTypes.shape({
    time: PropTypes.string,
  }).isRequired,
};

export default Typing;
