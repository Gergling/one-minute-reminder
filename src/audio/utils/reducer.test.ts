import { CaseValues, getModelList, initialiseCases } from "@/src/reducer-testing-library";
import { AudioReducerAction, AudioState } from "../types";
import { reducer } from "./reducer";

const baseInitialState: AudioState = {
  countdown: undefined,
  mode: 'idle',
  interval: 60,
  saveInterval: false,
  startRepeatTime: undefined,
  uri: null,
};

const getAudioStateCaseValues = (
  caseValues: CaseValues<Partial<AudioState>>
) => getModelList<AudioState>(baseInitialState, caseValues);

const mockDateNow = (milliseconds: number) => () =>
  jest.spyOn(global.Date, 'now').mockImplementationOnce(() => milliseconds);

describe('Experimental Testing Suite: Reducer', () => {
  initialiseCases<AudioState, AudioReducerAction>(
    reducer,
    baseInitialState
  )
    .case('should update the countdown to the time left until the interval completes', {
      arrange: () => ([{
        setup: mockDateNow(6000),
        state: {
          countdown: 1000000,
          interval: 5,
          startRepeatTime: 5000,
        },
      }]),
      act: 'countdown',
      assert: { countdown: 4 },
    })

    .case('should set the mode to idle', {
      arrange: [
        { mode: 'playing' },
        { mode: 'recording' },
      ],
      act: 'end',
      assert: { mode: 'idle' },
    })
    // TODO: YAGNI. I don't think this is being used right now. Review later.
    .case('should set the mode to idle: pause edition', {
      arrange: [
        { mode: 'playing' },
        { mode: 'recording' },
      ],
      act: 'pause',
      assert: { mode: 'idle' },
    })

    .case('should set the mode to playing', {
      arrange: getAudioStateCaseValues({
        mode: ['idle', 'recording'],
        uri: ['previous-uri'],
      }),
      act: 'play',
      assert: {
        mode: 'playing',
      },
    })

    .case('should set the mode to recording', {
      arrange: [
        { mode: 'idle' },
        { mode: 'playing' },
      ],
      act: 'record',
      assert: {
        mode: 'recording',
      },
    })
    .case('should set the startRepeatTime to now and the countdown to the interval', {
      arrange: () => ([{
        setup: mockDateNow(6000),
        state: {
          countdown: undefined,
          interval: 5,
          startRepeatTime: undefined,
        },
      }]),
      act: 'repeat',
      assert: {
        countdown: 5,
        startRepeatTime: 6000,
      },
    })
    .case('should set the mode to idle and the startRepeatTime to undefined', {
      arrange: getAudioStateCaseValues({
        mode: ['playing', 'recording'],
        startRepeatTime: [10000],
      }),
      act: 'stop',
      assert: {
        mode: 'idle',
        startRepeatTime: undefined,
      },
    })
    .case('should set the interval to the value provided and set the saveInterval flag', {
      arrange: { interval: 3, saveInterval: false },
      act: { type: 'interval', value: 7 },
      assert: {
        interval: 7,
        saveInterval: true,
      },
    })
    .case('should set the interval to the value provided and clear the saveInterval flag', {
      arrange: { interval: 2, saveInterval: true },
      act: { type: 'load', value: 11 },
      assert: {
        interval: 11,
        saveInterval: false,
      },
    })
    .case('should set the uri to the value provided', {
      arrange: getModelList<AudioState>(baseInitialState, {
        mode: ['playing', 'recording'],
        uri: [null, 'previous-uri'],
      }),
      act: { type: 'save', value: 'recording-uri' },
      assert: {
        mode: 'idle',
        uri: 'recording-uri',
      },
    })

    .done();
});
