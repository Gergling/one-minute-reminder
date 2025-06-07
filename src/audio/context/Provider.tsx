import { PropsWithChildren } from "react";
import { AudioContext } from "./Context";
import { useAudioContext } from "./use-context";

export const AudioContextProvider = ({ children }: PropsWithChildren) => {
  const contextValue = useAudioContext();

  return (
    <AudioContext.Provider value={contextValue}>
      {children}
    </AudioContext.Provider>
  );
};
