import { View } from "react-native";
import { Button, ButtonProps, Icon } from "react-native-paper";

type MainButtonProps = Omit<ButtonProps, 'children'> &
  Partial<Pick<ButtonProps, 'children'>> &
  {
    iconSource: string;
  };

export const MainButton = ({ children, iconSource, ...props }: MainButtonProps) => (
  <Button {...props}>
    <Icon color={props.textColor} size={180} source={iconSource} />
    <View>{children}</View>
  </Button>
);
