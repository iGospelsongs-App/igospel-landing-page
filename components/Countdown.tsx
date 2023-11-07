import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [time, setTime] = useState({
    hours: 1,
    minutes: 30,
    seconds: 0
  });

  const { hours, minutes, seconds } = time;

  const tick = () => {
    if (hours === 0 && minutes === 0 && seconds === 0) {
      // Timer ends
      // You can add some actions to be performed when the timer reaches 0
    } else if (minutes === 0 && seconds === 0) {
      // Decrease hours when both minutes and seconds reach 0
      setTime({
        hours: hours - 1,
        minutes: 59,
        seconds: 59
      });
    } else if (seconds === 0) {
      // Decrease minutes and reset seconds to 59 when seconds reach 0
      setTime({
        hours,
        minutes: minutes - 1,
        seconds: 59
      });
    } else {
      // Decrease seconds
      setTime({
        hours,
        minutes,
        seconds: seconds - 1
      });
    }
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <div>
      <h1>Countdown Timer</h1>
      <p>{`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</p>
    </div>
  );
};

export default CountdownTimer;
