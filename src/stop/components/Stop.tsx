import { useAudio } from "@/src/audio";
import { MainButton, useMainButtonProps } from "@/src/main-button";

export const Stop = () => {
  const { stop: props } = useMainButtonProps();
  const { isRepeating, mode, stop } = useAudio();
  return (
    <MainButton
      {...props}
      disabled={!isRepeating && mode === 'idle'}
      onPress={stop}
    />
  );
};
