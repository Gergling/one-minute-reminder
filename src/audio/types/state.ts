export type AudioState = {
  countdown: number | undefined;
  current: 'idle' | 'recording' | 'playing' | 'repeating';
  // TODO: The user will fill blank the input at some point, so this needs to cope with an undefined.
  // The action will require it as well.
  interval: number;
  startRepeat: Date | undefined;
  uri: string | null;
};
