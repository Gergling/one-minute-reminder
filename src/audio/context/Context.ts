import { ActionDispatch, createContext } from "react";
import { AUDIO_DEFAULT_STATE } from "../constants";
import { AudioReducerAction, AudioState } from "../types";

type AudioContextProps = AudioState & { dispatch: ActionDispatch<[ AudioReducerAction ]> };

export const AudioContext = createContext<AudioContextProps>({
  ...AUDIO_DEFAULT_STATE,
  dispatch: () => {},
});
