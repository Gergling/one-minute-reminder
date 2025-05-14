export type AudioState = {
  countdown: number | undefined;
  mode: 'idle' | 'recording' | 'playing';
  interval: number | null;
  saveInterval: boolean;
  startRepeatTime: Date | undefined;
  uri: string | null;
};
