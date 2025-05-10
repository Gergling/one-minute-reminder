import { useAudio } from '@/src/audio';
import { Button } from '@/src/common/Button';
import { ControlIconRecordEmpty, ControlIconRecordStop } from '@/src/common/control-icons';
import React, { useMemo } from 'react';
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingTop: StatusBar.currentHeight,
//     backgroundColor: '#ecf0f1',
//     padding: 8,
//   },
//   item: {
//     margin: 24,
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   whiteText: {
//     color: 'white',
//   }
// });

type ButtonState = 'empty' | 'recording' | 'source';

export const Record = () => {
  const {
    hasSource,
    state,
    record,
    stopRecording,
  } = useAudio();
  const buttonState: ButtonState = useMemo(
    () => {
      if (state === 'recording') return 'recording';

      return hasSource ? 'source' : 'empty';
    },
    [hasSource, state]
  );

  return (
    <>
      {buttonState === 'recording'
        ? (
          <Button onPress={stopRecording}>
            <ControlIconRecordStop />
          </Button>
        ) : (
          <Button onPress={record}>
            <ControlIconRecordEmpty />
          </Button>
        )
      }
    </>
  );
};
