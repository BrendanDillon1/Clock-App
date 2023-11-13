import React, { useState, useEffect } from "react";
import { ClockProps } from "../../../utils/interfaces";
import AnalogClock from "../ClockForm/AnalogClock";

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
      {clock.isDigital ? (
        <div className="digitalClock">{formatTime(time)}</div>
      ) : (
        <AnalogClock timeZone={clock.timeZone} />
      )}
      <button onClick={() => deleteClock(clock.id)}>Delete Clock</button>
    </div>
  );
};

export default Clock;
