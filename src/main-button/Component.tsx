import { ThemedView } from "@/components/ThemedView";
import { Button, ButtonProps, Icon } from "react-native-paper";

type MainButtonProps = Omit<ButtonProps, 'children'> &
  Partial<Pick<ButtonProps, 'children'>> &
  {
    iconSource: string;
  };

export const MainButton = ({ children, iconSource, ...props }: MainButtonProps) => (
  <Button {...props}>
    <Icon color={props.textColor} size={150} source={iconSource} />
    <ThemedView>{children}</ThemedView>
  </Button>
);
