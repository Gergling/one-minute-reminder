import { useAudio } from '@/src/audio';
import { MainButton, useMainButtonProps } from '@/src/main-button';
import React, { useMemo } from 'react';

type ButtonState = 'empty' | 'recording' | 'source';

export const Record = () => {
  const { record: props } = useMainButtonProps();
  const {
    hasSource,
    isRepeating,
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
  const disabled: boolean = useMemo(
    () => mode === 'playing' || isRepeating,
    [isRepeating, mode]
  );

  if (buttonState === 'recording')
    return <MainButton {...props} iconSource='stop-circle' onPress={stop} />;

  return <MainButton
    {...props}
    disabled={disabled}
    onPress={record}
  />;
};
