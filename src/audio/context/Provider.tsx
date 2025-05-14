import { PropsWithChildren } from "react";
import { useAudioContext } from "../hooks";
import { AudioContext } from "./Context";

export const AudioContextProvider = ({ children }: PropsWithChildren) => {
  const contextValue = useAudioContext();

  return (
    <AudioContext.Provider value={contextValue}>
      {children}
    </AudioContext.Provider>
  );
};
