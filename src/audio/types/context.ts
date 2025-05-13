import { AudioState } from "./state";

export type AudioContextProps = {
  countdown: number | undefined;
  handleIntervalChange: (interval: number) => void;
  hasSource: boolean;
  interval: number;
  isRepeating: boolean;
  mode: AudioState['mode'];
  play: () => unknown;
  record: () => unknown;
  repeat: () => unknown;
  stop: () => unknown;
};
