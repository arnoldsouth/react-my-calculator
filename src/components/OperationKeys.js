import React from 'react';
import { ACTIONS } from './Actions';

const OperationKeys = ({ dispatch, operation }) => {
  return (
    <button
      onClick={() =>
        dispatch({
          type: ACTIONS.CHOOSE_OPERATION,
          payload: { operation },
        })
      }
    >
      {operation}
    </button>
  );
};

export default OperationKeys;
