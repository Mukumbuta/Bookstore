import React from 'react';
import PropTypes from 'prop-types';
import './removeButton.css';

function RemoveButton({ removeBooks }) {
  return (
    <div className="remove-container">
      <button onClick={removeBooks} type="button">Remove</button>
    </div>
  );
}

RemoveButton.propTypes = {
  removeBooks: PropTypes.func.isRequired,
};
export default RemoveButton;
