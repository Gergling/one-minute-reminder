import { useAudio } from "@/src/audio";
import { Button, ControlIconRepeatStart } from "@/src/common";

export const Repeat = () => {
  const { repeat } = useAudio();
  return (
    <Button onPress={repeat}>
      <ControlIconRepeatStart />
    </Button>
  );
};
