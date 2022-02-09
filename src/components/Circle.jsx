import React from 'react';
import classNames from 'classnames';

const Circle = ({launch, style, pause, style2, minutes, seconds}) => {


  return (
    <div className="box-timer">
      <div className={classNames('circle', {'circle-round': launch}, {'circle-round-pause': (!launch && pause)})} style={style}>
        <div className='time-text'>
          <h1 className={classNames({'time': launch}, {'time-pause': (!launch && pause)})} style={style2}>{minutes} : {seconds < 10 ? '0' + seconds : seconds}</h1>
        </div>
      </div>

      <span className='dart'>&#9668;</span>
    </div>
  );
};

export default Circle;