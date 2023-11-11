import React, { useState } from "react";
import { Clocks } from "../../../utils/interfaces";
import Settings from "../Settings/Settings";
import Clock from "../Clocks/Clocks";
import "./App.css"

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

  const updateClock = (id: number, updatedValues: Partial<Clocks>) => {
    setClocks((prevClocks) =>
      prevClocks.map((clock) =>
        clock.id === id ? { ...clock, ...updatedValues } : clock
      )
    );
  };

  const deleteClock = (clockId: number) => {
    setClocks((clocks) => clocks.filter((clock) => clock.id !== clockId));
  };

  return (
    <div className="App">
      <header className="header">
        <h1>Clocks And Time</h1>
        <button onClick={() => addClock("UTC", true)}>
          Add UTC Digital Clock
        </button>
      </header>
      <div className="components-container">
        <Settings 
          clocks={clocks} 
          updateClock={updateClock} 
        />
        <div className="clocks-container">
          {clocks.map((clock) => (
            <Clock 
              key={clock.id}
              clock={clock} 
              deleteClock={deleteClock} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
