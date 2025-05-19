import { useAudio } from "@/src/audio";
import { useMainButtonProps } from "@/src/common/main-button";
import { MainButton } from "@/src/common/main-button/Component";

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
