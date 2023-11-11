import React, { useState} from "react";
import { ClockFormProps } from "../../../utils/interfaces";

const ClockForm: React.FC<ClockFormProps> = ({ clock, updateClock }) => {
  const [timeZone, setTimeZone] = useState(clock.timeZone)
  const [isDigital, setIsDigital] = useState(clock.isDigital)
  const handleSubmit = () => {
    updateClock(clock.id, { timeZone, isDigital })
  }

  return (
    <div className="form-input-container">
      <label>
        Time Zone:
        <input
          type="text"
          value={timeZone}
          onChange={(e) =>
            setTimeZone(e.target.value)}
        />
      </label>
      <label>
        Is Digital:
        <input
          type="checkbox"
          checked={isDigital}
          onChange={(e) =>
            setIsDigital(e.target.checked)
          }
        />
      </label>
      <button onClick={handleSubmit}>Update</button>
    </div>
  );
};

export default ClockForm