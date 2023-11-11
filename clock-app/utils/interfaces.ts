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
    updateClock: (id: number, clock: Partial<Clocks>) => void;
}

export interface ClockFormProps {
  clock: Clocks;
  updateClock: (id: number, clock: Partial<Clocks>) => void;
}