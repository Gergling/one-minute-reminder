import { AudioReducerAction, AudioState } from "../types";

type TypesMatching<T, V> = T extends V ? T : never;
type MappableActions = TypesMatching<AudioReducerAction, string>;
type MappableActionCurrentStates = {
  [key in MappableActions]: AudioState['current']
}

// TODO: 
// We have a time at which the repeat has been started. 
// We have an interval for the sound to be played. 
// We have the current time.
// The elapsed seconds is a number between the repeat start and the curren time.
// When the elapsed seconds exceeds the interval, play the sound and reset the repeat start time.

const getSeconds = (date: Date) => date.getTime();
const getDifference = (
  earlier: Date,
  later: Date = new Date(),
) => getSeconds(later) - getSeconds(earlier);

const reducerCurrentMapping = (
  currentState: AudioState['current'],
  action: MappableActions
) => {
  const mapping: MappableActionCurrentStates = {
    countdown: currentState,
    end: 'idle',
    pause: 'idle',
    play: 'playing',
    record: 'recording',
    repeat: 'repeating',
    stop: 'idle',
  };
  return mapping[action];
};

export const reducer = (state: AudioState, action: AudioReducerAction): AudioState => {
  const oldState = state.current;
  console.log('--- Reducer old state', oldState)
  console.log('--- Reducer action', action)
  const actionIsObject = typeof action === 'object';
  const actionIsRepeat = action === 'repeat';
  const actionIsSave = actionIsObject && action.type === 'save';

  const startRepeat = actionIsRepeat
    ? new Date()
    : action === 'stop' || action === 'record'
      ? undefined
      : state.startRepeat;

  const current = typeof action === 'string'
    ? reducerCurrentMapping(state.current, action)
    : actionIsSave
      ? 'idle'
      : state.current;

  console.log('--- Reducer new state', current)

  const uri = actionIsObject && action.type === 'save' ? action.value : state.uri;
  console.log('--- Reducer uri', uri)
  // console.log('state uri', uri, action)
  // const hasSource = state.hasSource || action === 'save';
  const interval = actionIsObject && action.type === 'interval' ? action.value : state.interval;
  // action === 'stop' || action === 'record' set the countdown to undefined, but that can depend on the state of repeat
  // actionIsRepeat means we can set the countdown to the interval.
  const elapsed = startRepeat && getDifference(startRepeat, new Date());
  const countdown = actionIsRepeat && interval >= 1
    ? interval
    : !state.countdown || elapsed === undefined
      ? undefined
      : action !== 'countdown'
        ? state.countdown
        : interval - elapsed;

  return {
    countdown,
    current,
    interval,
    startRepeat,
    uri,
  };
};
