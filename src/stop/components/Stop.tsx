import { useAudio } from "@/src/audio";
import { useMainButtonProps } from "@/src/common/main-button";
import { MainButton } from "@/src/common/main-button/Component";

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
