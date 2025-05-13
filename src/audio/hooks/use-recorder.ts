import { RecordingPresets, useAudioRecorderState, useAudioRecorder as useExpoAudioRecorder } from "expo-audio";
import { useCallback, useEffect, useState } from "react";
import { AudioState } from "../types";

export const useAudioRecorder = ({ mode }: AudioState) => {
  const [uri, setURI] = useState<string | null>(null);
  const audioRecorder = useExpoAudioRecorder(RecordingPresets.HIGH_QUALITY);
  const {
    canRecord,
    durationMillis,
    isRecording,
    mediaServicesDidReset,
    metering,
    url,
  } = useAudioRecorderState(audioRecorder);
  const handleAudioRecorderState = useCallback(
    () => {
      if (isRecording) {
        if (mode === 'idle') {
          audioRecorder
            .stop()
            .then(() => setURI(audioRecorder.uri));
        }
      } else {
        if (mode === 'recording') {
          audioRecorder
            .prepareToRecordAsync()
            .then(() => {
              audioRecorder.record();
            });
        }
      }
      // switch (current) {
      //   case 'recording':
      //     if (!isRecording) {
      //       audioRecorder
      //         .prepareToRecordAsync()
      //         .then(() => {
      //           audioRecorder.record();
      //         });
      //       return;
      //     }

      //     break;
      //   case 'idle':
      //     if (isRecording) {
      //       audioRecorder
      //         .stop()
      //         .then(() => {
      //           const uri = audioRecorder.uri;
      //           dispatch({ type: 'save', value: uri });
      //         });
      //       return;
      //     }

      //     break;
      //   default:
      //     return;
      // }
    },
    [audioRecorder, isRecording, mode]
  );

  useEffect(handleAudioRecorderState, [handleAudioRecorderState]);

  return {
    uri,
  };
}