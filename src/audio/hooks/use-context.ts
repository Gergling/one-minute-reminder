import { AudioModule, RecordingPresets, useAudioRecorder, useAudioRecorderState } from "expo-audio";
import { useCallback, useEffect, useMemo, useReducer } from "react";
import { Alert } from "react-native";
import { AUDIO_DEFAULT_STATE } from "../constants";
import { reducer } from "../utils";
import { useAudioPlayer } from "./use-player";

export const useAudioContext = () => {
  const [state, dispatch] = useReducer(reducer, AUDIO_DEFAULT_STATE);
  const {
    countdown,
    interval,
    mode: current,
    startRepeatTime,
    uri,
  } = state;

  const audioRecorder = useAudioRecorder(RecordingPresets.HIGH_QUALITY);
  const { isPlayerFinished } = useAudioPlayer(state);
  // const audioPlayer = useAudioPlayer();
  // const {
  //   currentTime,
  //   didJustFinish,
  //   isBuffering,
  //   isLoaded,
  //   loop,
  //   mute,
  //   playbackState,
  //   playing,
  //   timeControlStatus,
  //   duration,
  //   id,
  //   playbackRate,
  //   reasonForWaitingToPlay,
  //   shouldCorrectPitch,
  // } = useAudioPlayerStatus(audioPlayer);
  const {
    canRecord,
    durationMillis,
    isRecording,
    mediaServicesDidReset,
    metering,
    url,
  } = useAudioRecorderState(audioRecorder);

  const isRepeating = useMemo(() => !!startRepeatTime, [startRepeatTime]);
  const countdownInteger = useMemo(() => countdown && Math.floor(countdown), [countdown]);

  // TODO: Dispatch and side effect the recording.
  const record = async () => {
    await audioRecorder.prepareToRecordAsync();
    audioRecorder.record();
    dispatch('record');
  };

  const play = () => dispatch('play');
  
  // TODO: Move this back inside the stop function, probably.
  // Also, maybe we want to have the pause as a side effect.
  // Then we can give the audio player its own hook.
  // For that matter, if the player has its own hook, we don't
  // need to get much back and probably don't need to feed much into it.
  // Basically put in the mode and uri, and it could return the didJustFinish status.
  // Possibly we should provide it with its own reducer and unit test that.
  // const stopPlaying = () => {
  //   // TODO: A lack of pausing may cause us to run into an issue where the player is stopped and then
  //   // continues, but plays only the rest of the audio sample.
  //   console.log('stop playing triggered')
  //   // audioPlayer.pause();
  //   dispatch('stop');
  // };

  const handleIntervalChange = (interval: number) => {
    dispatch({ type: 'interval', value: interval });
  };

  const repeat = () => {
    dispatch('repeat');
  }
  
  const stopRepeating = () => {
    // clearTimeout(timeoutId);
    dispatch('stop');
  }
  
  const scheduleCountdownUpdate = useCallback(
    () => {
      // console.log('useAudio scheduleCountdownUpdate called')
      setTimeout(() => {
        // console.log('useAudio scheduled countdown timeout triggered')
        dispatch('countdown');
      }, 250);
      // setTimeout(() => dispatch('countdown'), 250);
    },
    [dispatch]
  );

  const stop = () => {
    console.log('general stop triggered')
    // TODO: This should probably propagate based on the state, but for now, we're doing this.
    switch (current) {
      // case 'playing':
      //   stopPlaying();
      //   break;
      case 'recording':
        // stopRecording();
        audioRecorder.stop().then(() => {
          const uri = audioRecorder.uri;
          dispatch({ type: 'save', value: uri });
        });
        break;
      // case 'repeating':
      //   // TODO: Based on the fact that the functon only contains a 'stop', we really need to
      //   // rethink our approach to state side effects here. 
      //   stopRepeating();
      //   break;
      default:
        // TODO: The goal is to make sure this is the only line in this function.
        dispatch('stop');
    } 
  }

  const hasSource = useMemo(() => !!uri, [uri]);
  // const hasSource = useMemo(() => !!storedURI, [storedURI]);

  useEffect(() => {
    (async () => {
      const status = await AudioModule.requestRecordingPermissionsAsync();
      if (!status.granted) {
        Alert.alert('Permission to access microphone was denied');
      }
    })();

    console.log('=== MOUNTED ===')
    return () => {
      console.log('=== UNMOUNTED ===');
    }
  }, []);

  // useEffect(() => {
  //   dispatch({ type: 'interval', value: 5 })
  // }, [dispatch]);

  // useEffect(() => console.log('??? currentTime', currentTime), [currentTime])
  // useEffect(() => console.log('??? didJustFinish', didJustFinish), [didJustFinish])
  // useEffect(() => console.log('??? isBuffering', isBuffering), [isBuffering])
  // useEffect(() => console.log('??? isLoaded', isLoaded), [isLoaded])
  // useEffect(() => console.log('??? loop', loop), [loop])
  // useEffect(() => console.log('??? mute', mute), [mute])
  // useEffect(() => console.log('??? playbackState', playbackState), [playbackState])
  // useEffect(() => console.log('??? playing', playing), [playing])
  // useEffect(() => console.log('??? timeControlStatus', timeControlStatus), [timeControlStatus])
  // useEffect(() => console.log('??? duration', duration), [duration])
  // useEffect(() => console.log('??? id', id), [id])
  // useEffect(() => console.log('??? playbackRate', playbackRate), [playbackRate])
  // useEffect(() => console.log('??? reasonForWaitingToPlay', reasonForWaitingToPlay), [reasonForWaitingToPlay])
  // useEffect(() => console.log('??? shouldCorrectPitch', shouldCorrectPitch), [shouldCorrectPitch])

  useEffect(() => console.log('RRR mode', current), [current]);

  useEffect(() => console.log('OOO canRecord', canRecord), [canRecord]);
  useEffect(() => console.log('OOO durationMillis', durationMillis), [durationMillis]);
  useEffect(() => console.log('OOO isRecording', isRecording), [isRecording]);
  useEffect(() => console.log('OOO mediaServicesDidReset', mediaServicesDidReset), [mediaServicesDidReset]);
  useEffect(() => console.log('OOO metering', metering), [metering]);
  useEffect(() => console.log('OOO url', url), [url]);


  // TODO: DOn't forget to make sure the user can't record while repeating or playing JIC they press the 
  // wrong button. They will not be happy at having to re-record.
  // If we tie this into the reducer, we can unit test it.
  // Possibly to unit test properly, we might want to consider putting all the state into the reducer,
  // including the player and recorder.
  // const handleAudioPlayerState = useCallback(
  //   () => {
  //     switch (current) {
  //       case 'playing':
  //         if (!playing) {
  //           if (didJustFinish) {
  //             dispatch('end');
  //             return;
  //           }
  //         }

  //         audioPlayer.play();

  //         break;
  //       case 'idle':
  //         audioPlayer.seekTo(0).then(() => {
  //           audioPlayer.pause();
  //         });

  //         break;
  //       default:
  //         return;
  //     }
  //   },
  //   [audioPlayer, current, didJustFinish, dispatch, playing]
  // );
  
  // const handleAudioPlayerURI = useCallback(
  //   () => {
  //     if (uri) {
  //       audioPlayer.replace({ uri });
  //     }
  //   },
  //   [audioPlayer, uri]
  // );

  // useEffect(handleAudioPlayerState, [handleAudioPlayerState]);
  // useEffect(handleAudioPlayerURI, [handleAudioPlayerURI]);

  // TODO: Tidy up with a separate handle, possibly.
  useEffect(() => {
    // console.log('useAudio countdown', countdown)
    if (countdown !== undefined) {
      if (countdown > 0) {
        // console.log('useAudio scheduling countdown')
        scheduleCountdownUpdate();
      } else {
        console.log('useAudio repeating')
        dispatch('play');
        dispatch('repeat');
      }
    }
  }, [countdown, dispatch, scheduleCountdownUpdate]);

  useEffect(() => {
    if (isPlayerFinished) {
      dispatch('end');
    }
  }, [isPlayerFinished]);

  return {
    countdown: countdownInteger,
    handleIntervalChange,
    hasSource,
    interval,
    // isPlaying: audioPlayer.playing,
    mode: current,
    play,
    record,
    repeat,
    state: current,
    stop,
    // stopPlaying,
    // stopRecording,
    stopRepeating,
  };
}
