export interface Clocks {
  id: number;
  timeZone: string;
  isDigital: boolean;
}

export interface ClockProps {
    clock: Clocks;
    deleteClock: (id: number) => void;
}

export interface SettingsProps {
    clocks: Clocks[]
    updateClock: (id: number, updateClock: { timeZone: string, isDigital: boolean}) => void
}