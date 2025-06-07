import { useAudio } from "@/src/audio";
import { PropsWithChildren, useMemo, useState } from "react";
import { IntervalModalContext } from "./Context";
import { IntervalModal } from "./ModalComponent";

export const IntervalModalContextProvider = ({ children }: PropsWithChildren) => {
  const [showInput, setShowInput] = useState<boolean>(false);
  const { handleIntervalChange, interval } = useAudio();
  const intervalString: string = useMemo(() => interval !== null ? interval.toString() : '', [interval]);
  const onChange = (updatedText: string) => {
    if (updatedText === '') {
      handleIntervalChange(null);
      return;
    }

    const updatedNumber = +updatedText;
    if (!isNaN(updatedNumber)) {
      handleIntervalChange(updatedNumber);
    }
  };

  const open = () => {
    setShowInput(true);
  };
  const onClose = () => setShowInput(false);
  const onSubmit = (updatedText: string) => {
    onChange(updatedText);
    onClose();
  };

  const value = {
    initialText: intervalString,
    isOpen: showInput,
    onClose,
    onSubmit,
    open,
  };

  return (
    <IntervalModalContext.Provider value={value}>
      {children}

      <IntervalModal />
    </IntervalModalContext.Provider>
  )
};
