import React, { useState } from "react";
import { Clocks } from "../../../utils/interfaces";
import Settings from "../Settings/Settings";
import Clock from "../Clocks/Clocks";
import "./App.css";
import majorTimeZones from "./TimeZones";

const App: React.FC = () => {
  const [clocks, setClocks] = useState<Clocks[]>([]);
  const [newTimeZone, setNewTimeZone] = useState<string>(majorTimeZones[0].value);
  const [isDigital, setIsDigital] = useState<boolean>(true);

  const handleAddClock = () => {
    const newClock: Clocks = {
      id: Date.now(),
      timeZone: newTimeZone,
      isDigital: isDigital,
    };
    setClocks((prevClocks) => [...prevClocks, newClock]);
  };

  const handleUpdateClock = (id: number, updatedValues: Partial<Clocks>) => {
    setClocks((prevClocks) => prevClocks.map((clock) => (clock.id === id ? { ...clock, ...updatedValues } : clock)));
  };

  const handleDeleteClock = (clockId: number) => {
    setClocks((prevClocks) => prevClocks.filter((clock) => clock.id !== clockId));
  };

  return (
    <div className="App">
      <header className="header">
        <h1>Clocks And Time</h1>
        <div>
          <select value={newTimeZone} onChange={(e) => setNewTimeZone(e.target.value)}>
            {majorTimeZones.map((tz) => (
              <option key={tz.value} value={tz.value}>
                {tz.label}
              </option>
            ))}
          </select>
          <label>
            <input type="checkbox" checked={isDigital} onChange={(e) => setIsDigital(e.target.checked)} />
            Is Digital
          </label>
          <button onClick={handleAddClock}>Add Clock</button>
        </div>
      </header>
      <div className="components-container">
        <Settings clocks={clocks} updateClock={handleUpdateClock} />
        <div className="clocks-container">
          {clocks.map((clock) => (
            <Clock key={clock.id} clock={clock} deleteClock={handleDeleteClock} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
