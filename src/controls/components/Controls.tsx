import { reducer } from "@/src/audio";
import { AUDIO_DEFAULT_STATE } from "@/src/audio/constants";
import { AudioContext } from "@/src/audio/context";
import { Interval } from "@/src/interval";
import { Play } from "@/src/play";
import { Record } from "@/src/record";
import { Repeat } from "@/src/repeat";
import { Stop } from "@/src/stop";
import { useReducer } from "react";

export const Controls = () => {
  const [state, dispatch] = useReducer(reducer, AUDIO_DEFAULT_STATE);

  return (
    <AudioContext value={{ ...state, dispatch }}>
      <Record />
      <Play />
      <Repeat />
      <Stop />
      <Interval />
    </AudioContext>
  );
};
