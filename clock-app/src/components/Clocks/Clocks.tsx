// Clock.tsx
import React, { useState, useEffect } from "react";
import { ClockInterface } from "./ClockInterface";
interface ClockProps {
  clock: ClockInterface;
  deleteClock: (id: number) => void;
}

const Clock: React.FC<ClockProps> = ({ clock, deleteClock }) => {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const formatTime = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
      timeZone: clock.timeZone,
    }).format(date);
  };

  return (
    <div className="clock">
      <div className="digitalClock">{formatTime(time)}</div>
      {/* A placeholder for the analog clock */}
      {!clock.isDigital && (
        <div className="analogClock">Analog clock is not implemented.</div>
      )}
      <button onClick={() => deleteClock(clock.id)}>Delete Clock</button>
    </div>
  );
};

export default Clock;
