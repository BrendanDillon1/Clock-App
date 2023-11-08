import React, { useState } from "react";
import { Clock } from "../../../utils/interfaces";
import Settings from "../Settings";
import Clocks from "../Clocks";

const App: React.FC = () => {
  const [clocks, setClocks] = useState<Clock[]>([]);

  const addClock = (timeZone: string, isDigital: boolean) => {
    const newClock: Clock = {
      id: Date.now(),
      timeZone,
      isDigital,
    };
    setClocks((clocks) => [...clocks, newClock]);
  };

  const updateClock = (clockToUpdate: Clock) => {
    setClocks((clocks) => clocks.map((clock) => (clock.id === clockToUpdate.id ? clockToUpdate : clock)));
  };

  const deleteClock = (clockId: number) => {
    setClocks((clocks) => clocks.filter((clock) => clock.id !== clockId));
  };

  return (
    <div className="App">
      <h1>Clocks And Time</h1>
      <button onClick={() => addClock("UTC", true)}>Add UTC Digital Clock</button>
      <Settings clocks={clocks} updateClock={updateClock} />
      <Clocks clocks={clocks} />
    </div>
  );
};

export default App;
