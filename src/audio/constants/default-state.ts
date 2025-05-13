import { AudioState } from "../types";

export const AUDIO_DEFAULT_STATE: AudioState = {
  countdown: undefined,
  mode: 'idle',
  interval: 5,
  saveInterval: false,
  startRepeatTime: undefined,
  uri: null,
};
