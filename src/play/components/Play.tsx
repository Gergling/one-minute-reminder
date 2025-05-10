import { useAudio } from "@/src/audio";
import { Button, ControlIconPlay } from "@/src/common";

export const Play = () => {
  const {
    play
  } = useAudio();
  return (
    <Button onPress={play}><ControlIconPlay /></Button>
  );
};
