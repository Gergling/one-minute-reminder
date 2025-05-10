import { PropsWithChildren } from "react";
import { GestureResponderEvent, TouchableHighlight, View } from "react-native";

type ButtonProps = PropsWithChildren & {
  onPress: (event: GestureResponderEvent) => unknown;
};

export const Button = ({
  children,
  onPress,
}: ButtonProps) => {
  return (
    <TouchableHighlight onPress={onPress}>
      <View>
        {children}
      </View>
    </TouchableHighlight>
  );
};
