import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export const useAsyncStorage = (storageKey: string) => {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [isMutating, setIsMutating] = useState<boolean>(false);
  const [item, setItemValue] = useState<string | null>(null);

  const setItem = (value: string) => {
    setIsMutating(true);
    setItemValue(value);
    AsyncStorage
      .setItem(storageKey, value)
      .catch(console.error)
      .finally(() => setIsMutating(false));
  };

  useEffect(() => {
    setIsFetching(true);
    AsyncStorage
      .getItem(storageKey)
      .then(setItemValue)
      .catch(console.error)
      .finally(() => setIsFetching(false));
  }, [storageKey]);

  return {
    isFetching,
    isMutating,
    item,
    setItem,
  };
};
