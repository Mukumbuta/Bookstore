import { PropTypes } from 'prop-types';
import React from 'react';

const StatusButton = (props) => {
  const { dispatch, action } = props;
  return (
    <div>
      <button
        type="button"
        className="statusBtn"
        onClick={() => dispatch(action())}
      >
        Check Status
      </button>
    </div>

  );
};

StatusButton.propTypes = {
  dispatch: PropTypes.func.isRequired,
  action: PropTypes.func.isRequired,

};

export default StatusButton;
