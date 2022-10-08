import React from 'react';
import PropTypes from 'prop-types';

function RemoveButton({ removeBooks }) {
  return (
    <div>
      <button onClick={removeBooks} type="button">Remove</button>
    </div>
  );
}

RemoveButton.propTypes = {
  removeBooks: PropTypes.func.isRequired,
};

export default RemoveButton;
