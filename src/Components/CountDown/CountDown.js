import React, { useEffect, useState } from "react";

const CountDown = ({ newYear }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      const now = new Date().getTime();
      const distance = (newYear - now) / 1000;
      if (distance > 0) {
        const days = Math.floor(distance / 60 / 60 / 24);
        const hours = Math.floor((distance / 60 / 60) % 24);
        const minutes = Math.floor((distance / 60) % 60);
        const seconds = Math.floor(distance % 60);
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      } else {
        clearInterval(timerId);
      }
    }, 1000);
    return () => clearInterval(timerId);
  }, [newYear]);

  return (
    <div className="container">
      <h3>Happy New Year</h3>
      <p>Wishing you a year of fulfillment and happiness. Happy New Year</p>
      <div className="countdown">
        <div className="time">
          <p>{days}</p>
          <p>Day</p>
        </div>
        <div className="time">
          <p>{hours}</p>
          <p>Hour</p>
        </div>
        <div className="time">
          <p>{minutes}</p>
          <p>Minute</p>
        </div>
        <div className="time">
          <p>{seconds}</p>
          <p>Second</p>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
