import { AudioState } from "./state";

export type AudioContextProps = {
  countdown: number | undefined;
  handleIntervalChange: (interval: number | null) => void;
  hasSource: boolean;
  interval: AudioState['interval'];
  isRepeating: boolean;
  mode: AudioState['mode'];
  play: () => unknown;
  record: () => unknown;
  repeat: () => unknown;
  stop: () => unknown;
};
