import "./CountdownTimer.scss";

import { useState, useEffect } from 'react';
const CountdownTimer = () => {

  const targetDate = new Date('December 25, 2023 00:00:00').getTime();


  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());


  function calculateTimeRemaining() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }


  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);


    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h1>Compte à rebours de Noël</h1>
      <div>
        <div>{timeRemaining.days} jours</div>
        <div>{timeRemaining.hours} heures</div>
        <div>{timeRemaining.minutes} minutes</div>
        <div>{timeRemaining.seconds} secondes</div>
      </div>
    </div>
  );
};

export default CountdownTimer;
