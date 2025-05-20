import { useAudio } from "@/src/audio";
import { useMemo, useState } from "react";
import { StyleSheet } from "react-native";
import { FAB, useTheme } from "react-native-paper";
import { IntervalModal } from "./Modal";

export const Interval = () => {
  const { colors: { primary, onPrimary }} = useTheme();
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

  const handleEdit = () => setShowInput(true);
  const handleClose = () => setShowInput(false);
  const handleSubmit = (updatedText: string) => {
    onChange(updatedText);
    handleClose();
  };

  return (
    <>
      <IntervalModal
        initialText={intervalString}
        onClose={handleClose}
        onSubmit={handleSubmit}
        visible={showInput}
      />
      <FAB
        color={onPrimary}
        icon="pencil"
        onPress={handleEdit}
        style={{ ...styles.fab, backgroundColor: primary }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
