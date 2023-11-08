import React, { useState } from "react";
import { Clock } from "../../../utils/interfaces";
import Settings from "../Settings";
import Clocks from "../Clocks";

const App: React.FC = () => {
  const [clocks, setClocks] = useState<Clock[]>([]);
  const updateClock = (clockToUpdate: Clock) => {};

  return (
    <div className="App">
      <Settings clocks={clocks} updateClock={updateClock} />
      <Clocks clocks={clocks} />
    </div>
  );
};

export default App;
