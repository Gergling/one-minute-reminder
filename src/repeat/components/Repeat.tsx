import { useAudio } from "@/src/audio";
import { MainButton, useMainButtonProps } from "@/src/common/main-button";
import { StyleSheet, View } from "react-native";
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
      <View style={styles.container}>
        <Text style={{ ...styles.text, color: props.textColor }}>{interval}</Text>
      </View>
    </MainButton>
  );
};

const styles = StyleSheet.create({
  container: {
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
