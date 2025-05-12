import { useContext } from 'react';
import { AudioContext } from '../context';

export const useAudio = (stuff?: string) => {
  return useContext(AudioContext);
}
// export const useAudio = (stuff?: string) => {
//   const audioRecorder = useAudioRecorder(RecordingPresets.HIGH_QUALITY);
//   const audioPlayer = useAudioPlayer();
//   const {
//     currentTime,
//     didJustFinish,
//     isBuffering,
//     isLoaded,
//     loop,
//     mute,
//     playbackState,
//     playing,
//     timeControlStatus,
//     duration,
//     id,
//     playbackRate,
//     reasonForWaitingToPlay,
//     shouldCorrectPitch,
//   } = useAudioPlayerStatus(audioPlayer);
//   const {
//     canRecord,
//     durationMillis,
//     isRecording,
//     mediaServicesDidReset,
//     metering,
//     url,
//   } = useAudioRecorderState(audioRecorder);

//   const {
//     countdown,
//     mode: current,
//     interval,
//     startRepeatTime,
//     uri,
//     dispatch,
//   } = useContext(AudioContext);
//   const isRepeating = useMemo(() => !!startRepeatTime, [startRepeatTime]);
//   const countdownInteger = useMemo(() => countdown && Math.floor(countdown), [countdown]);

//   // console.log('hook state uri', uri)

//   // const [state, dispatch] = useReducer<typeof reducer>(reducer, { current: 'idle', hasSource: false });
//   // const [isPlaying, setIsPlaying] = useState<boolean>(false);
//   // const [isRecording, setIsRecording] = useState<boolean>(false);

//   const record = async () => {
//     await audioRecorder.prepareToRecordAsync();
//     audioRecorder.record();
//     dispatch('record');
//   };

//   const play = useCallback(
//     async () => {
//       // console.log('running play', uri, audioRecorder.uri)
//       console.log('+ PLAY 0: Running play', uri, stuff)
//       // console.log('+ PLAY 0: Running play', uri)
//       if (!playing) {
//         try {
//           // const uri = audioRecorder.uri;
//           // dispatch('play');
//           if(uri) {
//             audioPlayer.replace({ uri });
//           } else {
//             console.log('No stored context URI')
//           }
//           // console.log('+ PLAY 1: Getting URI...')
//           // const storedURI = await AsyncStorage.getItem(RECORDING_STORAGE_KEY);
//           // if (storedURI) {
//           //   console.log('+ PLAY 2: Replacing URI...', storedURI)
//           //   audioPlayer.replace({ uri: storedURI });
//           // } else {
//           // }
//           audioPlayer.play();
//         } catch (e) {
//           console.error(e);
//         }
//       }
//     },
//     // [audioPlayer, storedURI]
//     [audioPlayer, playing, stuff, uri]
//     // []
//   );
  
//   const stopPlaying = () => {
//     // TODO: A lack of pausing may cause us to run into an issue where the player is stopped and then
//     // continues, but plays only the rest of the audio sample.
//     console.log('stop playing triggered')
//     audioPlayer.pause();
//     dispatch('stop');
//   };

//   const stopRecording = async () => {
//     try {
//       await audioRecorder.stop();
//       const uri = audioRecorder.uri;
//       if (!uri) {
//         console.error('Recording left no uri.');
//       } else {
//         // await AsyncStorage.setItem(RECORDING_STORAGE_KEY, uri);
//         // setURI(uri);
//         // dispatch('stop');
//         dispatch({ type: 'save', value: uri });
//         audioPlayer.replace({ uri });
//       }
//     } catch (e) {
//       console.error(e);
//     }
//   };

//   const handleIntervalChange = (interval: number) => {
//     dispatch({ type: 'interval', value: interval });
//   };

//   const repeat = () => {
//     dispatch('repeat');
//   }
  
//   const stopRepeating = () => {
//     // clearTimeout(timeoutId);
//     dispatch('stop');
//   }
  
//   const scheduleCountdownUpdate = useCallback(
//     () => {
//       // console.log('useAudio scheduleCountdownUpdate called')
//       setTimeout(() => {
//         // console.log('useAudio scheduled countdown timeout triggered')
//         dispatch('countdown');
//       }, 250);
//       // setTimeout(() => dispatch('countdown'), 250);
//     },
//     [dispatch]
//   );

//   const stop = () => {
//     console.log('general stop triggered')
//     // TODO: This should probably propagate based on the state, but for now, we're doing this.
//     switch (current) {
//       case 'playing':
//         stopPlaying();
//         break;
//       case 'recording':
//         stopRecording();
//         break;
//       // case 'repeating':
//       //   // TODO: Based on the fact that the functon only contains a 'stop', we really need to
//       //   // rethink our approach to state side effects here. 
//       //   stopRepeating();
//       //   break;
//       default:
//         // TODO: The goal is to make sure this is the only line in this function.
//         dispatch('stop');
//     } 
//   }

//   const hasSource = useMemo(() => !!uri, [uri]);
//   // const hasSource = useMemo(() => !!storedURI, [storedURI]);

//   useEffect(() => {
//     (async () => {
//       const status = await AudioModule.requestRecordingPermissionsAsync();
//       if (!status.granted) {
//         Alert.alert('Permission to access microphone was denied');
//       }
//     })();

//     console.log('=== MOUNTED ===')
//     return () => {
//       console.log('=== UNMOUNTED ===');
//     }
//   }, []);

//   // useEffect(() => {
//   //   dispatch({ type: 'interval', value: 5 })
//   // }, [dispatch]);

//   useEffect(() => console.log('??? currentTime', currentTime), [currentTime])
//   useEffect(() => console.log('??? didJustFinish', didJustFinish), [didJustFinish])
//   useEffect(() => console.log('??? isBuffering', isBuffering), [isBuffering])
//   useEffect(() => console.log('??? isLoaded', isLoaded), [isLoaded])
//   useEffect(() => console.log('??? loop', loop), [loop])
//   useEffect(() => console.log('??? mute', mute), [mute])
//   useEffect(() => console.log('??? playbackState', playbackState), [playbackState])
//   useEffect(() => console.log('??? playing', playing), [playing])
//   useEffect(() => console.log('??? timeControlStatus', timeControlStatus), [timeControlStatus])
//   useEffect(() => console.log('??? duration', duration), [duration])
//   useEffect(() => console.log('??? id', id), [id])
//   useEffect(() => console.log('??? playbackRate', playbackRate), [playbackRate])
//   useEffect(() => console.log('??? reasonForWaitingToPlay', reasonForWaitingToPlay), [reasonForWaitingToPlay])
//   useEffect(() => console.log('??? shouldCorrectPitch', shouldCorrectPitch), [shouldCorrectPitch])

//   useEffect(() => console.log('RRR mode', current), [current]);

//   useEffect(() => console.log('OOO canRecord', canRecord), [canRecord]);
//   useEffect(() => console.log('OOO durationMillis', durationMillis), [durationMillis]);
//   useEffect(() => console.log('OOO isRecording', isRecording), [isRecording]);
//   useEffect(() => console.log('OOO mediaServicesDidReset', mediaServicesDidReset), [mediaServicesDidReset]);
//   useEffect(() => console.log('OOO metering', metering), [metering]);
//   useEffect(() => console.log('OOO url', url), [url]);

//   // useEffect(() => {
//   //   console.log('!!! URI:', uri)
//   //   return () => {
//   //     console.log('!!! URI UNMOUNTED:', uri)
//   //   }
//   // }, [uri])

//   useEffect(() => {
//     if (didJustFinish && !playing) {
//       dispatch('end');
//     }
//   }, [didJustFinish, dispatch, playing]);

//   useEffect(() => {
//     // console.log('useAudio countdown', countdown)
//     if (countdown !== undefined) {
//       if (countdown > 0) {
//         // console.log('useAudio scheduling countdown')
//         scheduleCountdownUpdate();
//       } else {
//         console.log('useAudio repeating')
//         dispatch('play');
//         dispatch('repeat');
//       }
//     }
//   }, [countdown, dispatch, scheduleCountdownUpdate, play]);

//   useEffect(() => {
//     if (current === 'playing' && !playing) {
//       console.log('triggering play')
//       play();
//     }
//   }, [current, play, playing]);


//   // useEffect(() => {
//   //   console.log('STORED URI', storedURI)
//   // }, [storedURI]);

//   return {
//     countdown: countdownInteger,
//     handleIntervalChange,
//     hasSource,
//     interval,
//     isPlaying: audioPlayer.playing,
//     play,
//     record,
//     repeat,
//     state: current,
//     stop,
//     stopPlaying,
//     stopRecording,
//     stopRepeating,
//   };

//   // return (
//   //   <View style={styles.container}>
//   //     <Button
//   //       title={isRecording ? 'Stop Recording' : 'Start Recording'}
//   //       onPress={isRecording ? stopRecording : record}
//   //     />
//   //   </View>
//   // );
// }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     backgroundColor: '#ecf0f1',
// //     padding: 10,
// //   },
// // });
