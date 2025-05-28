import { useAudio } from "@/src/audio";
import { MainButton, useMainButtonProps } from "@/src/main-button";

export const Play = () => {
  const { play: props } = useMainButtonProps();
  const {
    hasSource,
    mode,
    play,
    stop,
  } = useAudio();

  if (mode === 'playing') return <MainButton
    {...props}
    iconSource="pause"
    onPress={stop}
  />;

  return (
    <MainButton
      {...props}
      disabled={mode !== 'idle' || !hasSource}
      onPress={play}
    />
  );
};
