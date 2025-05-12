import { useAudio } from "@/src/audio";
import { StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 50,
    marginTop: 50,
    textAlign: 'center',
  },
});

export const Status = () => {
  const { countdown, mode } = useAudio();

  return (
    <>
      <Text style={styles.text}>
        {mode}
      </Text>
      <Text style={styles.text}>
        ({countdown === undefined ? 'Not repeating' : `Counting down: ${countdown}`})
      </Text>
    </>
  );
};
