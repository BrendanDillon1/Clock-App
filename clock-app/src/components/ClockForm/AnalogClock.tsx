import React, { useState, useEffect } from "react";
import "./AnalogClock.css";

interface AnalogClockProps {
  timeZone: string;
}

const AnalogClock: React.FC<AnalogClockProps> = ({ timeZone }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      // Update time using the timeZone
      const currentTime = new Date(new Date().toLocaleString("en-US", { timeZone }));
      setTime(currentTime);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeZone]);

  const secondsDegrees = (time.getSeconds() / 60) * 360 + 90;
  const minutesDegrees = (time.getMinutes() / 60) * 360 + (time.getSeconds() / 60) * 6 + 90;
  const hoursDegrees = (time.getHours() / 12) * 360 + (time.getMinutes() / 60) * 30 + 90;

  return (
    <div className="analog-clock">
      <div className="hand hour-hand" style={{ transform: `rotate(${hoursDegrees}deg)` }} />
      <div className="hand minute-hand" style={{ transform: `rotate(${minutesDegrees}deg)` }} />
      <div className="hand second-hand" style={{ transform: `rotate(${secondsDegrees}deg)` }} />
      <div className="clock-center" /> {/* This is the center point of the clock */}
    </div>
  );
};

export default AnalogClock;
