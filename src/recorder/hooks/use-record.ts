// TODO: This hook may become irrelevant. Review later.
// For that matter, if we don't need this, test for whether we need expo-audio.
// Update: Apparently this is the more up to date package.
import { AudioModule, RecordingPresets, useAudioPlayer, useAudioRecorder } from 'expo-audio';
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';

export const useRecord = () => {
  const audioRecorder = useAudioRecorder(RecordingPresets.HIGH_QUALITY);
  const audioPlayer = useAudioPlayer();
  const [isRecording, setIsRecording] = useState(false);

  const record = async () => {
    console.log('started')
    await audioRecorder.prepareToRecordAsync();
    console.log('prepared')
    // audioRecorder.recordForDuration(60);
    audioRecorder.record();
    console.log('recording')
    setIsRecording(true);
  };

  const stopRecording = async () => {
    // The recording will be available on `audioRecorder.uri`.
    await audioRecorder.stop();
    const uri = audioRecorder.uri;
    if (uri) {
      audioPlayer.replace({ uri });
      audioPlayer.play();
      setIsRecording(false);
    }
  };

  useEffect(() => {
    (async () => {
      const status = await AudioModule.requestRecordingPermissionsAsync();
      if (!status.granted) {
        Alert.alert('Permission to access microphone was denied');
      }
    })();
  }, []);

  // const playBack = async () => {
  //   audioRecorder.uri
  // }

  return {
    start: record,
    stop: stopRecording,
    isRecording,
    // playback: audioRecorder.
  };

  // return (
  //   <View style={styles.container}>
  //     <Button
  //       title={isRecording ? 'Stop Recording' : 'Start Recording'}
  //       onPress={isRecording ? stopRecording : record}
  //     />
  //   </View>
  // );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: '#ecf0f1',
//     padding: 10,
//   },
// });
