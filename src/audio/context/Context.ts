import { createContext } from "react";
import { AudioContextProps } from "../types";

const noop = () => {};

export const AudioContext = createContext<AudioContextProps>({
  countdown: undefined,
  handleIntervalChange: noop,
  hasSource: false,
  interval: 5,
  isRepeating: false,
  mode: 'idle',
  play: noop,
  record: noop,
  repeat: noop,
  stop: noop,
});
