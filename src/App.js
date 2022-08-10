import React from 'react';
import NumKeys from './components/NumKeys';
import OperationKeys from './components/OperationKeys';
import {
  ACTIONS,
  FORMAT_INTEGER,
  reducer,
  evaluate,
  formatOperand,
} from './components/Actions';

import { useReducer } from 'react';
import './App.css';

function App() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );

  return (
    <>
      <div className="calculator-grid">
        <div className="output">
          <div className="previous-operand">
            {formatOperand(previousOperand)} {operation}
          </div>
          <div className="current-operand">{formatOperand(currentOperand)}</div>
        </div>

        <button
          className="span-two"
          onClick={() => dispatch({ type: ACTIONS.CLEAR })}
        >
          AC
        </button>

        <button onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}>
          DEL
        </button>
        <OperationKeys operation="÷" dispatch={dispatch} />

        <NumKeys digit="7" dispatch={dispatch} />
        <NumKeys digit="8" dispatch={dispatch} />
        <NumKeys digit="9" dispatch={dispatch} />

        <OperationKeys operation="*" dispatch={dispatch} />
        <NumKeys digit="4" dispatch={dispatch} />
        <NumKeys digit="5" dispatch={dispatch} />
        <NumKeys digit="6" dispatch={dispatch} />

        <OperationKeys operation="-" dispatch={dispatch} />
        <NumKeys digit="1" dispatch={dispatch} />
        <NumKeys digit="2" dispatch={dispatch} />
        <NumKeys digit="3" dispatch={dispatch} />

        <OperationKeys operation="+" dispatch={dispatch} />
        <NumKeys digit="0" dispatch={dispatch} />
        <NumKeys digit="." dispatch={dispatch} />

        <button
          className="span-two"
          onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
        >
          =
        </button>
      </div>
    </>
  );
}

export default App;
