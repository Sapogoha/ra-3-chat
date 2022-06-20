import React from 'react';
import PropTypes from 'prop-types';
import { FaCircle } from 'react-icons/fa';

function Message({ from, message }) {
  return (
    <li>
      <div className="message-data">
        <span className="message-data-name">
          <FaCircle className="another-person" /> {from.name}
        </span>
        <span className="message-data-time">{message.time}</span>
      </div>
      <div className="message my-message">{message.text}</div>
    </li>
  );
}

Message.propTypes = {
  from: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  message: PropTypes.shape({
    time: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
};

export default Message;
