import React, { useState } from "react";
import { Clocks } from "../../../utils/interfaces";
import Settings from "../Settings/Settings";
import Clock from "../Clocks/Clocks";

const App = () => {
  const [clocks, setClocks] = useState<Clocks[]>([
    { id: 1, timeZone: "America/Detroit", isDigital: true },
    { id: 2, timeZone: "Asia/Seoul", isDigital: true },
    { id: 3, timeZone: "Iceland", isDigital: true },
    { id: 4, timeZone: "Pacific/Tahiti", isDigital: true },
  ]);
  const addClock = (timeZone: string, isDigital: boolean) => {
    const newClock: Clocks = {
      id: Date.now(),
      timeZone,
      isDigital,
    };
    setClocks((clocks) => [...clocks, newClock]);
  };

  const updateClock = (
    id: number,
    updatedClockData: { timeZone: string; isDigital: boolean }
  ) => {
    setClocks((prevClocks) =>
      prevClocks.map((clock) =>
        clock.id === id ? { ...clock, ...updatedClockData } : clock
      )
    );
  };
  const deleteClock = (clockId: number) => {
    setClocks((clocks) => clocks.filter((clock) => clock.id !== clockId));
  };

  return (
    <div className="App">
      <h1>Clocks And Time</h1>
      <button onClick={() => addClock("UTC", true)}>
        Add UTC Digital Clock
      </button>
      <Settings clocks={clocks} updateClock={updateClock} />
      {clocks.map((clock) => (
        <Clock key={clock.id} clock={clock} deleteClock={deleteClock} />
      ))}
    </div>
  );
};

export default App;
