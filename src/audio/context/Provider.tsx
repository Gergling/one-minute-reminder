import { PropsWithChildren } from "react";
import { AudioContext } from "./Context";
import { useAudioContext } from "./hook";

export const AudioContextProvider = ({ children }: PropsWithChildren) => {
  const contextValue = useAudioContext();

  return (
    <AudioContext.Provider value={contextValue}>
      {children}
    </AudioContext.Provider>
  );
};
