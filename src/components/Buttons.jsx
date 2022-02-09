import React from 'react';
import classNames from 'classnames';

const Buttons = ({ decreaseDeg, launch, increaseDeg, start, setPause}) => {
  return (
    <>
      <div className={classNames('box-button')}>
        <button 
          onClick={decreaseDeg} 
          className={classNames('button', {'button-disabled-left': launch}, {'button-active-left': !launch})} disabled={launch}
        >
          decrease
        </button>

        <button
          onClick={increaseDeg} 
          className={classNames('button', {'button-disabled-right': launch}, {'button-active-right': !launch})}
        >
          increase
        </button>
      </div>

      <button 
        onClick={() => {
          start();
          setPause(true);
        }} 
        className={classNames("button", {'button-start-active': launch}, {'button-start-disabled': !launch})}
      >
        {launch ? 'Stop' : 'Start'}
      </button>
    </>
  );
};

export default Buttons;