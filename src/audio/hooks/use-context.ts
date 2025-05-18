import { AudioModule } from "expo-audio";
import { useCallback, useEffect, useMemo, useReducer } from "react";
import { Alert } from "react-native";
import { AUDIO_DEFAULT_STATE } from "../constants";
import { AudioContextProps } from "../types";
import { reducer } from "../utils";
import { useAudioRepeatIntervalStorage } from "./use-interval-storage";
import { useAudioPlayer } from "./use-player";
import { useAudioRecorder } from "./use-recorder";

export const useAudioContext = (): AudioContextProps => {
  // State and Audio Hooks.
  const [state, dispatch] = useReducer(reducer, AUDIO_DEFAULT_STATE);
  const {
    countdown,
    mode,
    saveInterval,
    startRepeatTime,
    uri,
  } = state;
  const { isPlayerFinished } = useAudioPlayer(state);
  const { uri: recorderURI } = useAudioRecorder(state);
  const { storedInterval: interval } = useAudioRepeatIntervalStorage(state);

  // Side Effects
  // Microphone permission should only be requested when attempting to record.
  const handlePermissions = useCallback(
    () => {
      if (mode === 'recording') {
        AudioModule
          .getRecordingPermissionsAsync()
          .then((response) => {
            console.log('permission status', response.status)
            if (!response.granted) {
              stop();
            }
          })
        AudioModule
          .requestRecordingPermissionsAsync()
          .then(({ granted }) => {
            if (!granted) {
              Alert.alert('Permission to access microphone was denied');
            }
          })
      }
    },
    [mode]
  );
  const handleCountdown = useCallback(
    () => {
      if (countdown !== undefined) {
        if (countdown > 0) {
          setTimeout(() => dispatch('countdown'), 250)
        } else {
          dispatch('play');
          dispatch('repeat');
        }
      }
    },
    [countdown]
  );
  const handleIntervalFetch = useCallback(
    () => {
      if (!saveInterval) {
        dispatch({ type: 'load', value: interval });
      }
    },
    [interval, saveInterval]
  );
  const handlePlayerFinished = useCallback(
    () => {
      if (isPlayerFinished) {
        dispatch('end');
      }
    },
    [isPlayerFinished]
  );
  const handleRecorderStopped = useCallback(
    () => dispatch({ type: 'save', value: recorderURI }),
    [recorderURI]
  );

  // Output states
  const countdownInteger = useMemo(() => countdown && Math.floor(countdown), [countdown]);
  const hasSource = useMemo(() => !!uri, [uri]);
  const isRepeating = useMemo(() => !!startRepeatTime, [startRepeatTime]);

  // Control functions.
  const record = () => dispatch('record');
  const play = () => dispatch('play');
  const repeat = () => dispatch('repeat');
  const stop = () => dispatch('stop');
  const handleIntervalChange = (interval: number | null) => dispatch({
    type: 'interval',
    value: interval
  });

  // Side Effect Execution
  useEffect(handleCountdown, [handleCountdown]);
  useEffect(handleIntervalFetch, [handleIntervalFetch]);
  useEffect(handlePermissions, [handlePermissions]);
  useEffect(handlePlayerFinished, [handlePlayerFinished]);
  useEffect(handleRecorderStopped, [handleRecorderStopped]);

  return {
    countdown: countdownInteger,
    handleIntervalChange,
    hasSource,
    interval,
    isRepeating,
    mode,
    play,
    record,
    repeat,
    stop,
  };
};
