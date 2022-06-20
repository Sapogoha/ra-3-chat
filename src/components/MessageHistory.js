import React from 'react';
import PropTypes from 'prop-types';

import Message from './Message';
import Response from './Response';
import Typing from './Typing';

function MessageHistory({ list }) {
  if (list.length === 0) return null;
  return (
    <ul>
      {list.map((item) =>
        item.type === 'message' ? (
          <Message
            key={item.id}
            from={item.from}
            message={{ time: item.time, text: item.text }}
          />
        ) : item.type === 'response' ? (
          <Response
            key={item.id}
            from={item.from}
            response={{ time: item.time, text: item.text }}
          />
        ) : (
          <Typing key={item.id} from={item.from} typing={{ time: item.time }} />
        )
      )}
    </ul>
  );
}

MessageHistory.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
};

MessageHistory.defaultProps = {
  list: [],
};

export default MessageHistory;
