import { Button, ButtonProps, Icon } from "react-native-paper";


// type Size = 'modal' | 'large';
// type Category = 'main' | 'modal';
// type Name<SelectedCategory extends Category> = SelectedCategory extends 'main'
//   ? 'play' | 'repeat' | 'record' | 'stop'
//   : 'cancel' | 'submit';
// type IconProps<SelectedCategory extends Category> = {
//   name: Name<SelectedCategory>;
// };

// type TypesMatching<T> = T extends string ? T : never;
// type RefinedColorSchemeName = TypesMatching<ColorSchemeName>;
// type ColorMappings = {
//   [key in RefinedColorSchemeName]: OpaqueColorValue | string;
// };
// type IconConfig = {
//   colors: ColorMappings;
//   size: Size;
// };
// type Mapping = {
//   [key in Name<'main'>]: IconConfig;
// }

// const sizeMapping: {
//   [key in Size]: number;
// } = {
//   large: 100,
//   modal: 48,
// };
// const mapping: Mapping = {
//   cancel: {
//     colors: {
//       dark: 'red',
//       light: 'red',
//     },
//     size: 'modal',
//   },
//   play: {
//     colors: {
//       dark: 'green',
//       light: 'green',
//     },
//     size: 'large',
//   },
//   repeat: {
//     colors: {
//       dark: 'yellow',
//       light: 'yellow',
//     },
//     size: 'large',
//   },
//   record: {
//     colors: {
//       dark: 'red',
//       light: 'red',
//     },
//     size: 'large',
//   },
//   stop: {
//     colors: {
//       dark: 'blue',
//       light: 'blue',
//     },
//     size: 'large',
//   },
//   submit: {
//     colors: {
//       dark: 'john',
//       light: 'green',
//     },
//     size: 'modal',
//   },
// };

// type MainButtonFunction = 'record' | 'stop' | 'repeat' | 'play';
// type MainButtonVariant = keyof ComponentThemeProps['controls'];

type MainButtonProps = Omit<ButtonProps, 'children'> & {
  // buttonFunction: MainButtonFunction;
  iconSource: string;
};

// type MainButtonStyle = {
//   [key in MainButtonFunction]: {
//     backgroundColor: string;
//     color: string;
//   }
// };

// const getMainButtonStyle = ({ colors: {
//   primary,
//   onPrimary,
//   secondary,
//   onSecondary,
// } }: MD3Theme): MainButtonStyle => {
//   const primaryButton = {
//     backgroundColor: primary,
//     color: onPrimary,
//   };
//   const secondaryButton = {
//     backgroundColor: secondary,
//     color: onSecondary,
//   }
//   return {
//     play: secondaryButton,
//     record: primaryButton,
//     repeat: primaryButton,
//     stop: secondaryButton,
//   };
// };

// const useMainButtonStyle = (buttonFunction: MainButtonFunction) => {
//   const theme = useTheme();
//   const styles = getMainButtonStyle(theme);
//   return styles[buttonFunction];
// }

// record/repeat are primary
// play/stop are secondary
// repeat and play should be disabled until there is source
// 

export const MainButton = ({ iconSource, ...props }: MainButtonProps) => {
  // const style = useMainButtonStyle(buttonFunction);
  // theme.
  return (
    <Button {...props}>
      <Icon source={iconSource} size={180} />
    </Button>
  );
}