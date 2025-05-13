import { AudioReducerAction, AudioReducerActionUpdatesIntervalProps, AudioState } from "../types";

type Mode = AudioState['mode'];
type TypesMatching<T, V> = T extends V ? T : never;
type MappableActions = TypesMatching<AudioReducerAction, string>;
type MappableActionCurrentStates = {
  [key in MappableActions]: Mode;
}

// TODO: 
// We have a time at which the repeat has been started. 
// We have an interval for the sound to be played. 
// We have the current time.
// The elapsed seconds is a number between the repeat start and the curren time.
// When the elapsed seconds exceeds the interval, play the sound and reset the repeat start time.

// const getSeconds = (date: Date) => date.getTime();
const getDifference = (
  earlier: Date,
  later: Date = new Date(),
) => (later.getTime() - earlier.getTime()) / 1000;

const reducerCurrentMapping = (
  currentState: Mode,
  action: MappableActions
): Mode => {
  const mapping: MappableActionCurrentStates = {
    countdown: currentState,
    end: 'idle',
    pause: 'idle',
    play: currentState,
    record: 'recording',
    repeat: currentState,
    stop: 'idle',
  };
  return mapping[action];
};

const actionsUpdateInterval: AudioReducerActionUpdatesIntervalProps[] = ['interval', 'load'];

export const reducer = (state: AudioState, action: AudioReducerAction): AudioState => {
  const actionIsObject = typeof action === 'object';
  const actionIsRepeat = action === 'repeat';
  const actionIsSave = actionIsObject && action.type === 'save';
  const actionUpdatesInterval = actionIsObject
    && !actionIsSave
    && actionsUpdateInterval.includes(action.type);

  const saveInterval = actionIsObject && action.type === 'interval';
  const startRepeatTime = actionIsRepeat
    ? new Date()
    : action === 'stop' || action === 'record'
      ? undefined
      : state.startRepeatTime;

  const mode: Mode = typeof action === 'string'
    ? action === 'play' && state.uri
      ? 'playing'
      : reducerCurrentMapping(state.mode, action)
    : actionIsSave
      ? 'idle'
      : state.mode;

  const uri = actionIsSave ? action.value : state.uri;
  const interval = actionUpdatesInterval ? action.value : state.interval;
  const elapsed = startRepeatTime && getDifference(startRepeatTime, new Date());
  const countdown: number | undefined = actionIsRepeat && interval !== null && interval >= 1
    ? interval
    : !state.countdown || elapsed === undefined || interval === null
      ? undefined
      : action !== 'countdown'
        ? state.countdown
        : interval - elapsed;

  return {
    countdown,
    mode,
    interval,
    saveInterval,
    startRepeatTime,
    uri,
  };
};
