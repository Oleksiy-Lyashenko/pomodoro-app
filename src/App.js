import { useEffect, useState } from 'react';
import useSound from 'use-sound';

import tick_tock from './sounds/tik.mp3';
import end_sound from './sounds/Cline_Dion_-_My_Heart_Will_Go_On.mp3';
import './App.css';
import Circle from './components/Circle';
import Buttons from './components/Buttons';
import Subtitle from './components/Subtitle';

function App() {
  const [deg, setDeg] = useState(0);
  const [minutes, setMinutes] = useState(30);
  const [seconds, setSeconds] = useState(0)
  const [launch, setLaunch] = useState(false);
  const [pause, setPause] = useState(false);

  const [play, { stop }] = useSound(tick_tock);
  const [playEnd, { stopEnd }] = useSound(end_sound);

  const start = () => {
    const handle = !launch;
    setLaunch(handle);
  }

  useEffect(() => {
    if (seconds === 0 && minutes === 0 && launch) {
      playEnd();
      return setLaunch(false);
    }

    console.log(minutes, seconds, launch);

    if (launch) {

      if (seconds === 0) {
        return setTimeout(() => {
          setSeconds(59)
          setMinutes(minutes - 1);
          setDeg(360)
          play();
        }, 1000)
      }
    
      return setTimeout(() => {
        play();
        setSeconds(seconds - 1)
      }, 1000)
    }

  }, [launch, seconds, minutes, play, playEnd]);

  const increaseDeg = () => {
    setDeg(deg + 12);

    if (minutes === 59) {
      return setMinutes(0)
    }
    setMinutes(minutes + 1);
  }

  const decreaseDeg = () => {
    setDeg(deg - 12);

    if (minutes === 0) {
      return setMinutes(59);
    }

    setMinutes(minutes - 1);
  }
  
  const style = {
    display: "flex",
    "justify-content": 'center',
    "align-items": 'center',
    transition: "transform 1s",
    transform: `rotate(${deg}deg)`,
  }

  const style2 = {
    transition: "transform 1s",
    transform: `rotate(${-deg}deg)`,
  }

  return (
    <div className="App">
      <Circle 
        launch={launch}
        style={style}
        pause={pause}
        style2={style2}
        minutes={minutes}
        seconds={seconds}
      />
      
      <Buttons 
        decreaseDeg={decreaseDeg}
        launch={launch}
        increaseDeg={increaseDeg}
        start={start}
        setPause={setPause}
      />

      <Subtitle />
    </div>
  );
}

export default App;
