// TODO: What if you want to pause the repeat without re-recording?
export type AudioReducerActionUpdatesIntervalProps = 'interval'
  | 'load';

export type AudioReducerAction = 'countdown'
  | 'pause'
  | 'play'
  | 'record'
  | 'repeat'
  | 'stop'
  | 'end'
  | {
    type: AudioReducerActionUpdatesIntervalProps;
    value: number | null;
  } | {
    type: 'save';
    value: string | null;
  };
