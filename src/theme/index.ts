// import { ColorSchemeName, OpaqueColorValue } from "react-native";
// import { darkTheme, lightTheme } from "./constants";
// // import lightTheme from "./constants/light";

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

// const theme = {
//   dark: darkTheme,
//   light: lightTheme,
// };

// export default theme;

export * from './constants';
export * from './context';
export * from './hooks';
export * from './utils';

