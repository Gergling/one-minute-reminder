import { useAudio } from "@/src/audio";
import { useMainButtonProps } from "@/src/common/main-button";
import { StyleSheet, View } from "react-native";
import { List } from "react-native-paper";

export const Guide = () => {
  const { interval } = useAudio();
  const { play, record, repeat, stop } = useMainButtonProps()
  const helpList = [
    {
      ...record,
      description: 'Record your reminder.',
    },
    {
      ...play,
      description: 'Play your reminder once.',
    },
    {
      ...repeat,
      description: `Repeat your reminder every ${interval} seconds.`,
    },
    {
      ...stop,
      description: 'Stop the current recording operation.',
    },
    {
      ...repeat,
      iconSource: 'pencil',
      description: `Edit the reminder interval.`,
    },
  ];
  return (
    <View>
      {helpList.map(({
        buttonColor,
        description,
        iconSource,
        textColor,
      }, key) => (
        <List.Item
          containerStyle={styles.reset}
          contentStyle={styles.reset}
          key={key}
          left={
            props => <View style={{
              ...styles.view,
              backgroundColor: buttonColor,
            }}>
              <List.Icon
                {...props}
                color={textColor}
                icon={iconSource}
                style={{
                  /** This empty object is here to cut the extra space. */
                }}
              />
            </View>
          }
          title={description}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    display: 'flex',
  },
  reset: {
    color: 'red',
    padding: 0,
  }
});
