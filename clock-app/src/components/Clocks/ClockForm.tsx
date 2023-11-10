import React from "react";
import { Clocks } from "../../../utils/interfaces";

interface ClockFormProps {
  clock: Clocks;
  updateClock: (id: number, clock: Partial<Clocks>) => void;
}

const ClockForm: React.FC<ClockFormProps> = ({ clock, updateClock }) => {
  return (
    <div>
      <label>
        Time Zone:
        <input
          type="text"
          value={clock.timeZone}
          onChange={(e) => updateClock(clock.id, { timeZone: e.target.value })}
        />
      </label>
      <label>
        Is Digital:
        <input
          type="checkbox"
          checked={clock.isDigital}
          onChange={(e) =>
            updateClock(clock.id, { isDigital: e.target.checked })
          }
        />
      </label>
      <button onClick={() => updateClock(clock.id, {})}>Update</button>
    </div>
  );
};

export default ClockForm;
