import { useAudio } from "@/src/audio";
import { Button, ControlIconStop } from "@/src/common";

export const Stop = () => {
  const { stop } = useAudio();
  return (
    <Button onPress={stop}><ControlIconStop /></Button>
  );
};
