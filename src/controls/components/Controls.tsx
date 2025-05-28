import { ThemedView } from "@/components/ThemedView";
import { Play } from "@/src/play";
import { Record } from "@/src/record";
import { Repeat } from "@/src/repeat";
import { Stop } from "@/src/stop";
import { PropsWithChildren } from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

const Row = ({ children }: PropsWithChildren) => <ThemedView style={styles.row}>{children}</ThemedView>;

export const Controls = () => {
  return (
    <>
      <Row>
        <Play />
        <Repeat />
      </Row>
      <Row>
        <Record />
        <Stop />
      </Row>
    </>
  );
};
