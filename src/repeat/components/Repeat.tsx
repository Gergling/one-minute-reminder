import { ThemedView } from "@/components/ThemedView";
import { useAudio } from "@/src/audio";
import { MainButton, useMainButtonProps } from "@/src/main-button";
import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";

export const Repeat = () => {
  const { repeat: props } = useMainButtonProps();
  const { hasSource, interval, isRepeating, mode, repeat } = useAudio();
  return (
    <MainButton
      {...props}
      disabled={!hasSource || isRepeating || mode !== 'idle'}
      onPress={repeat}
    >
      <ThemedView style={styles.container}>
        <Text style={{ ...styles.text, color: props.textColor }}>{interval}</Text>
      </ThemedView>
    </MainButton>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    left: -150,
    right: 0,
    top: -85,
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
  },
});
