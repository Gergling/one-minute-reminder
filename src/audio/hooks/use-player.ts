import { useAudioPlayerStatus, useAudioPlayer as useExpoAudioPlayer } from "expo-audio";
import { useCallback, useEffect, useState } from "react";
import { AudioState } from "../types";

export const useAudioPlayer = ({ mode, uri }: Pick<AudioState, 'mode' | 'uri'>) => {
  const current = mode;
  const audioPlayer = useExpoAudioPlayer();
  const {
    currentTime,
    didJustFinish,
    isBuffering,
    isLoaded,
    loop,
    mute,
    playbackState,
    playing,
    timeControlStatus,
    duration,
    id,
    playbackRate,
    reasonForWaitingToPlay,
    shouldCorrectPitch,
  } = useAudioPlayerStatus(audioPlayer);
  const [isPlayerFinished, setIsPlayerFinished] = useState<boolean>(false);

  const handleAudioPlayerState = useCallback(
    () => {
      setIsPlayerFinished(false);
      switch (current) {
        case 'playing':
          if (!playing) {
            if (didJustFinish) {
              setIsPlayerFinished(true);
              return;
            }
          }

          audioPlayer.play();

          break;
        case 'idle':
          audioPlayer.seekTo(0).then(() => {
            audioPlayer.pause();
          });

          break;
        default:
          return;
      }
    },
    [audioPlayer, current, didJustFinish, playing]
  );
  
  const handleAudioPlayerURI = useCallback(
    () => {
      if (uri) {
        audioPlayer.replace({ uri });
      }
    },
    [audioPlayer, uri]
  );

  useEffect(handleAudioPlayerState, [handleAudioPlayerState]);
  useEffect(handleAudioPlayerURI, [handleAudioPlayerURI]);

  return {
    isPlayerFinished,
  };
}