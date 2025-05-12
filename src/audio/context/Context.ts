import { createContext } from "react";
import { AudioState } from "../types";

type AudioContextProps = {
  // dispatch: ActionDispatch<[ AudioReducerAction ]>;
  countdown: number | undefined;
  handleIntervalChange: (interval: number) => void;
  hasSource: boolean;
  interval: number;
  isPlaying: boolean,
  mode: AudioState['mode'];
  play: () => unknown;
  record: () => unknown;
  repeat: () => unknown;
  stop: () => unknown;
};

const noop = () => {};

export const AudioContext = createContext<AudioContextProps>({
  countdown: undefined,
  handleIntervalChange: noop,
  hasSource: false,
  interval: 5,
  isPlaying: false,
  mode: 'idle',
  play: noop,
  record: noop,
  repeat: noop,
  stop: noop,
});
