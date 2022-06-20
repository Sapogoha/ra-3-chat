import React from 'react';
import PropTypes from 'prop-types';
import { FaCircle } from 'react-icons/fa';

function Response({ from, response }) {
  return (
    <li className="clearfix">
      <div className="message-data align-right">
        <span className="message-data-time">{response.time}</span> &nbsp; &nbsp;
        <FaCircle className="me" />
        <span className="message-data-name">{from.name}</span>
      </div>
      <div className="message other-message float-right">{response.text}</div>
    </li>
  );
}

Response.propTypes = {
  from: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  response: PropTypes.shape({
    time: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
};

export default Response;
