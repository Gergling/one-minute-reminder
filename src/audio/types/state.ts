export type AudioState = {
  countdown: number | undefined;
  mode: 'idle' | 'recording' | 'playing';
  // TODO: The user will fill blank the input at some point, so this needs to cope with an undefined.
  // The action will require it as well.
  interval: number;
  startRepeatTime: Date | undefined;
  uri: string | null;
};
