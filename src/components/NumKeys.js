import React from 'react';
import { ACTIONS } from './Actions';

const NumKeys = ({ dispatch, digit }) => {
  return (
    <button
      onClick={() =>
        dispatch({
          type: ACTIONS.ADD_DIGIT,
          payload: { digit },
        })
      }
    >
      {digit}
    </button>
  );
};

export default NumKeys;
