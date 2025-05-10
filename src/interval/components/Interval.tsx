import { useAudio } from "@/src/audio";
import { useMemo } from "react";
import { StyleSheet, TextInput } from "react-native";

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 50,
    marginTop: 50,
    textAlign: 'center',
  },
});

export const Interval = () => {
  const { handleIntervalChange, interval } = useAudio();
  const intervalString = useMemo(() => interval.toString(), [interval]);
  const onChange = (updatedText: string) => {
    if (updatedText === '') {
      // TODO: Handle empty text, possibly with undefined or something.
    }

    const updatedNumber = +updatedText;
    if (!isNaN(updatedNumber)) {
      handleIntervalChange(updatedNumber);
    }
  }
  return (
    <TextInput style={styles.text} defaultValue={intervalString} onChangeText={onChange}/>
  );
};
