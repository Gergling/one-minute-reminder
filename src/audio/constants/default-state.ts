import { AudioState } from "../types";

export const AUDIO_DEFAULT_STATE: AudioState = {
  countdown: undefined,
  current: 'idle',
  interval: 60,
  startRepeat: undefined,
  uri: null,
};
