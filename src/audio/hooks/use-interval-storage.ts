import { useAsyncStorage } from "@/src/storage";
import { useCallback, useEffect, useState } from "react";
import { AudioState } from "../types";

const STORAGE_KEY = 'audio-interval-storage-key';

export const useAudioRepeatIntervalStorage = ({ interval, saveInterval }: AudioState) => {
  const [numericStoredInterval, setNumericStoredInterval] = useState<number>(interval || 5);
  const {
    item: storedInterval,
    setItem: setStoredInterval,
  } = useAsyncStorage(STORAGE_KEY);
  
  const handleIntervalFetch = useCallback(
    () => {
      if (storedInterval !== null) {
        const numericStoredInterval = +storedInterval;
        if (numericStoredInterval !== interval) {
          setNumericStoredInterval(numericStoredInterval);
        }
      }
    },
    [interval, storedInterval]
  );
  const handleIntervalSet = useCallback(
    () => {
      if (saveInterval && interval !== null) {
        if (storedInterval !== null) {
          const numericStoredInterval = +storedInterval;
          if (numericStoredInterval !== interval) {
            setStoredInterval(interval.toString());
          }
        } else {
          setStoredInterval(interval.toString());
        }
      }
    },
    [interval, saveInterval, setStoredInterval, storedInterval]
  );

  useEffect(handleIntervalFetch, [handleIntervalFetch]);
  useEffect(handleIntervalSet, [handleIntervalSet]);

  return {
    storedInterval: numericStoredInterval,
  };
};
