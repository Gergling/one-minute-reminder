// import { Audio } from 'expo-av';

export const useAudio = () => {
  // const [recording, setRecording] = useState<Audio.Recording>();
  // const [permissionResponse, requestPermission] = Audio.usePermissions();

  // const [sound, setSound] = useState<Audio.Sound>();

  // async function playSound() {
  //   const audioUri = recording?.getURI();
  //   if (audioUri) {
  //     console.log('Loading Sound');
  //     const { sound } = await Audio.Sound.createAsync(require(audioUri));
  //     setSound(sound);
  
  //     console.log('Playing Sound');
  //     await sound.playAsync();
  //   } else {
  //     console.log('No recording to play back')
  //   }
  // }

  // useEffect(() => {
  //   return sound
  //     ? () => {
  //         console.log('Unloading Sound');
  //         sound.unloadAsync();
  //       }
  //     : undefined;
  // }, [sound]);

  // async function startRecording() {
  //   try {
  //      if (permissionResponse?.status !== 'granted') {
  //       console.log('Requesting permission..');
  //       await requestPermission();
  //     }
  //     await Audio.setAudioModeAsync({
  //       allowsRecordingIOS: true,
  //       playsInSilentModeIOS: true,
  //     }); 

  //     console.log('Starting recording..');
  //      const { recording } = await Audio.Recording.createAsync(
  //        Audio.RecordingOptionsPresets.HIGH_QUALITY
  //     );
  //     setRecording(recording);
  //     console.log('Recording started');
  //   } catch (err) {
  //     console.error('Failed to start recording', err);
  //   }
  // }

  // async function stopRecording() {
  //   console.log('Stopping recording..', !!recording);
  //   setRecording(undefined);
  //   if (recording) {
  //     await recording.stopAndUnloadAsync(); 
  //     await Audio.setAudioModeAsync(
  //       {
  //         allowsRecordingIOS: false,
  //       }
  //     ); 
  //     const uri = recording.getURI(); 
  //     console.log('Recording stopped and stored at', uri);
  //   } else {
  //     console.log('There was no recording.')
  //   }
  // }

  // async function stopRecording() {
  //   try {

  //     if (recording) {
  //       console.log('Stopping Recording')
  //       await recording.stopAndUnloadAsync();
  //       const recordingUri = recording.getURI();

  //       // Create a file name for the recording
  //       const fileName = `recording-${Date.now()}.caf`;

  //       if (recordingUri) {
  //         // Move the recording to the new directory with the new file name
  //         await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'recordings/', { intermediates: true });
  //         await FileSystem.moveAsync({
  //           from: recordingUri,
  //           to: FileSystem.documentDirectory + 'recordings/' + `${fileName}`
  //         });
  
  //         // This is for simply playing the sound back
  //         const playbackObject = new Audio.Sound();
  //         await playbackObject.loadAsync({ uri: FileSystem.documentDirectory + 'recordings/' + `${fileName}` });
  //         await playbackObject.playAsync();
  
  //         // resert our states to record again
  //         setRecording(undefined);
  //         // setRecordingStatus('stopped');
  //       } else {
  //         console.log('No uri for recording')
  //       }
  //     }

  //   } catch (error) {
  //     console.error('Failed to stop recording', error);
  //   }
  // }

  return {
    // playSound,
    // startRecording,
    // stopRecording,
    junk: 1,
  }
}
