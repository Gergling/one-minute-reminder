import { Interval } from "@/src/interval";
import { Play } from "@/src/play";
import { Record } from "@/src/record";
import { Repeat } from "@/src/repeat";
import { Stop } from "@/src/stop";
import { PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

const Row = ({ children }: PropsWithChildren) => <View style={styles.row}>{children}</View>;

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
      <Interval />
    </>
  );
};
