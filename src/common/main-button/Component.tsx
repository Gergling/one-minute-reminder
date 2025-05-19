import { Button, ButtonProps, Icon } from "react-native-paper";

type MainButtonProps = Omit<ButtonProps, 'children'> & {
  iconSource: string;
};

export const MainButton = ({ iconSource, ...props }: MainButtonProps) => (
  <Button {...props}>
    <Icon color={props.textColor} size={180} source={iconSource} />
  </Button>
);
