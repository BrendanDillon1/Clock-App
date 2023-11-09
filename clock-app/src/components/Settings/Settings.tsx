import React, { useState } from "react"
import "./Settings.css"
// import ClockForm from "./ClockForm"
import { SettingsProps } from "../../../utils/interfaces"

const Settings: React.FC<SettingsProps> = ({ clocks, updateClock }) => (
  <div className="settings">
    {clocks.map((clock) => (
      <li 
        key={clock.id}
        className="clocks"
      >
        {/* <ClockForm 
          clock={clock}
          updateClock={updateClock}
        /> */}
      </li>
    ))}
  </div>
)

export default Settings