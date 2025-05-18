import { AudioState } from "../types";

type AudioStateReference = {
  countdown: number | undefined;
  current: 'idle' | 'recording' | 'playing' | 'repeating';
  // TODO: The user will fill blank the input at some point, so this needs to cope with an undefined.
  // The action will require it as well.
  interval: number;
  startRepeatTime: Date | undefined;
  uri: string | null;
};
// TODO: What if you want to pause the repeat without re-recording?
type ReducerActionReference = 'countdown' | 'pause' | 'play' | 'record' | 'repeat' | 'stop' | 'end' | {
  type: 'interval';
  value: number;
} | {
  type: 'save';
  value: string | null;
};

const baseInitialState: AudioState = {
  countdown: undefined,
  mode: 'idle',
  interval: 60,
  saveInterval: false,
  startRepeatTime: undefined,
  uri: null,
};

describe('Reducer', () => {
  describe('Mode Agnostic', () => {
    it('should only be able to play if there is a uri')
    it('should return a saveInterval state if the interval was loaded')
  });
  describe('From Idle', () => {
    it('should handle a countdown')
    it('should switch to a recording state')
  });
  describe('From Recording', () => {});
  describe('From Playing', () => {});
});
