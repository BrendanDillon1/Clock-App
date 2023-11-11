import React from "react"
import "./Settings.css"
import { SettingsProps } from "../../../utils/interfaces"
import ClockForm from "../ClockForm/ClockForm"

const Settings: React.FC<SettingsProps> = ({ clocks, updateClock }) => (
  <div className="settings-container">
    {clocks.map((clock) => (
        <ClockForm
          key={clock.id}
          clock={clock}
          updateClock={updateClock}
        />
    ))}
  </div>
)

export default Settings