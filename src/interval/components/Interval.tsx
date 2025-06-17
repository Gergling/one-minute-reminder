import { useAudio } from "@/src/audio";
import { AppErrorBoundary } from "@/src/error-boundary";
import { useMemo } from "react";
import { StyleSheet } from "react-native";
import { FAB, useTheme } from "react-native-paper";
import { useIntervalModal } from "../context";

export const Interval = () => {
  const { colors: { primary, onPrimary }} = useTheme();
  const { open } = useIntervalModal();
  const { interval } = useAudio();
  const intervalString: string = useMemo(() => interval !== null ? interval.toString() : '', [interval]);

  const handleEdit = () => open(intervalString);

  return (
    <AppErrorBoundary error="Interval FAB gone done a bad">
      <FAB
        color={onPrimary}
        icon="pencil"
        label="Edit Reminder Interval"
        onPress={handleEdit}
        style={{ ...styles.fab, backgroundColor: primary }}
      />
    </AppErrorBoundary>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    marginBottom: 24,
    right: 0,
    bottom: 0,
  },
});
