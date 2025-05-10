// TODO: What if you want to pause the repeat without re-recording?
export type AudioReducerAction = 'countdown' | 'pause' | 'play' | 'record' | 'repeat' | 'stop' | 'end' | {
  type: 'interval';
  value: number;
} | {
  type: 'save';
  value: string | null;
};
