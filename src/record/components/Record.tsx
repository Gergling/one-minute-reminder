import { useAudio } from '@/src/audio';
import { ControlIconRecordEmpty, ControlIconRecordStop } from '@/src/common';
import React, { useMemo } from 'react';
import { Button } from 'react-native-paper';
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
    mode,
    record,
    stop,
  } = useAudio();
  const buttonState: ButtonState = useMemo(
    () => {
      if (mode === 'recording') return 'recording';

      return hasSource ? 'source' : 'empty';
    },
    [hasSource, mode]
  );

  // <MainButton iconSource='record-circle' onPress={record} />
  return (
    <>
      {buttonState === 'recording'
        ? (
          <Button onPress={stop}>
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
