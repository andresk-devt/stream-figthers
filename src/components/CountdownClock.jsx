import "../assets/styles/countClock.css";
import { useState, useEffect } from "react";

const CountDownClock = () => {
  const targetDate = new Date("2023-10-01T17:00:00");
  
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <div className="banner-container">
        <div className="message-container">
          <h1>
            ¡Prepárate para el evento más esperado! Stream <span>figthers</span>  iniciará
            en:
          </h1>
        </div>
        <div className="countdown-clock">
          <div className="digit">
            <span>{timeLeft.days.toString().padStart(2, "0")}</span>
            <span>Días</span>
          </div>
          <div className="digit">
            <span>{timeLeft.hours.toString().padStart(2, "0")}</span>
            <span>Horas</span>
          </div>
          <div className="digit">
            <span>{timeLeft.minutes.toString().padStart(2, "0")}</span>
            <span>Minutos</span>
          </div>
          <div className="digit">
            <span>{timeLeft.seconds.toString().padStart(2, "0")}</span>
            <span>Segundos</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountDownClock;
