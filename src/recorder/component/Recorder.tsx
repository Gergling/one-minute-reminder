import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import React from 'react';
import {
  Button,
  PermissionsAndroid,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useRecord } from '../hooks';

const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      {
        title: 'One Minute Reminder',
        message: `One Minute Reminder needs access to record audio so you can hear
          your own wonderful voice repeat back to you why you walked into this room
          every minute.`,
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the audio recorder');
    } else {
      console.log('Audio recorder permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  item: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  whiteText: {
    color: 'white',
  }
});

export const Recorder = () => {
  const {
    isRecording,
    start,
    stop,
  } = useRecord();

  return (
    <>
      <Text style={styles.whiteText}>useRecord: {isRecording ? 'Recording!' : 'Not recording.'}</Text>
      <TouchableHighlight onPress={start}>
        <View>
          <MaterialCommunityIcons name="record-circle" size={48} color="red" />
        </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={stop}>
        <View>
          <FontAwesome5 name="stop-circle" size={48} color="red" />
        </View>
      </TouchableHighlight>

      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <Text style={styles.item}>Try permissions</Text>
          <Button title="request permissions" onPress={requestCameraPermission} />
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
};
