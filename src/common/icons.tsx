// import Entypo from '@expo/vector-icons/Entypo';
// import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
// import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
// import { ColorSchemeName, OpaqueColorValue, StyleSheet, useColorScheme } from 'react-native';

// // TODO: Move to a different file.
// StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     fontSize: 20,
//   },
//   lightContainer: {
//     backgroundColor: '#d0d0c0',
//   },
//   darkContainer: {
//     backgroundColor: '#242c40',
//   },
//   lightThemeText: {
//     color: '#242c40',
//   },
//   darkThemeText: {
//     color: '#d0d0c0',
//   },
// });

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
// } & {
//   [key in Name<'modal'>]: IconConfig;
// }

// const sizeMapping: {
//   [key in Size]: number;
// } = {
//   large: 180,
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

// export const Icon = <SelectedCategory extends Category>({ name }: IconProps<SelectedCategory>) => {
//   // TODO: useColorScheme will need to be used to serve up suitable colours.
//   const colorScheme = useColorScheme();
//   const { colors, size: configSize } = mapping[name];
//   const size = sizeMapping[configSize];
//   const color = colorScheme ? colors[colorScheme] : 'grey';

//   switch (name) {
//     case 'cancel':
//       return <Entypo name="cross" size={size} color={color} />;
//     case 'play':
//       return <Entypo name="controller-play" size={size} color={color} />;
//     case 'repeat':
//       return <FontAwesome6 name="arrows-rotate" size={size} color={color} />;
//     case 'record':
//       return <MaterialCommunityIcons name="record-circle" size={size} color={color} />;
//     case 'stop':
//       return <FontAwesome6 name="stop-circle" size={size} color={color} />;
//     case 'submit':
//       return <Entypo name="check" size={size} color={color} />;
//   }
// };
