import { useAudio } from "@/src/audio";
import { useMainButtonProps } from "@/src/common/main-button";
import { MainButton } from "@/src/common/main-button/Component";

export const Repeat = () => {
  const { repeat: props } = useMainButtonProps();
  const { isRepeating, mode, repeat } = useAudio();
  return (
    <MainButton
      {...props}
      disabled={isRepeating || mode !== 'idle'}
      onPress={repeat}
    />
  );
};
