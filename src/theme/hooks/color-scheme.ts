import { ColorSchemeName, useColorScheme } from "react-native";
import { darkTheme, lightTheme } from "../constants";

// type TokenClass = 'ref' | 'sys' | 'comp';
// type OmitExplicit<T extends string, U extends T> = keyof Omit<{ [key in T]: unknown; }, U>
type TypeString<T> = T extends string ? T : never

// type OneMRThemeProps = {
//   '1mr': {
//     ref: unknown;
//     sys?: unknown;
//     comp?: unknown;
//   };
// };

const themes = {
  dark: darkTheme,
  light: lightTheme
};

// const isTokenClassValid = (
//   tokenClass: string | undefined,
//   currentThemeTokenClass: OmitExplicit<TokenClass, 'ref'>
// ): boolean => {
//   type ValidTokenClass = OmitExplicit<TokenClass, 'comp'>;
//   if (!tokenClass) return false;
//   if (tokenClass !== (tokenClass as ValidTokenClass)) return false;
//   if (tokenClass === currentThemeTokenClass) return false;
//   return true;
// };

// const get1mrTheme = (
//   ref: unknown,
//   sys?: unknown,
//   comp?: unknown
// ): OneMRThemeProps => ({
//   '1mr': {
//     ref,
//     sys,
//     comp,
//   }
// });

const getReferenceTheme = (colorSchemeName: ColorSchemeName) =>
  themes[colorSchemeName as TypeString<ColorSchemeName>];

// const getThemeFromPathTokens = (
//   property: unknown,
//   colorSchemeName: ColorSchemeName,
//   currentThemeTokenClass: OmitExplicit<TokenClass, 'ref'>,
//   theme: unknown,
// ): unknown => {
//   if (typeof property === 'string') {
//     const pathBits = getPathBits(property);
//     const root = pathBits.shift();
//     if (root !== '1mr') throw new Error(`Root should be '1mr'.`);
//     const tokenClass = pathBits.shift();
//     if (!isTokenClassValid(tokenClass, currentThemeTokenClass)) {
//       throw new Error(`
//         Invalid token class:
//         ${
//           tokenClass === undefined
//             ? `undefined`
//             : `'${tokenClass}'`
//         } found in ${currentThemeTokenClass}-level theme.`);
//     }
//     // TODO: System keys will reference "ref" or error.
//     // If we want sys references, should make a note to test for circulars.
//     // If we're checking the component theme, merge in the system theme at the suitable location.
//     return getToken(property, theme);
//   }

//   if (property === null) throw new Error(`No theme objects should include a null.`);
//   if (property === undefined) throw new Error(`No theme objects should be undefined.`);

//   if (typeof property === 'object') {
//     return Object
//       .entries(property)
//       .reduce((themeObject, [key, childProperty]) => {
//         try {
//           const token = getThemeFromPathTokens(childProperty, colorSchemeName, currentThemeTokenClass, theme);
//           return {
//             ...themeObject,
//             [key]: token,
//           };
//         } catch(e) {
//           throw new Error(`Error parsing theme for key '${key}': ${e}`);
//         }
//       }, {});
//   }

//   throw new Error(`Property has untested type: ${typeof property}`);
// };

// const getFullTheme = (
//   colorSchemeName: ColorSchemeName,
//   maximumClass: TokenClass
// ) => {
//   const ref = getReferenceTheme(colorSchemeName);
//   const ref1mr = get1mrTheme(ref);

//   if (maximumClass === 'ref') return ref1mr;

//   const sys = getThemeFromPathTokens(systemTheme, colorSchemeName, 'sys', ref1mr);
//   const sys1mr = get1mrTheme(ref, sys);

//   if (maximumClass === 'sys') return sys1mr;

//   const comp = getThemeFromPathTokens(componentTheme, colorSchemeName, 'comp', sys1mr);

//   return get1mrTheme(ref, sys, comp);
// };

// TODO: The full theme will have to come through in a separate hook.
// We can assume the useTheme handles the reference level.

export const useColorSchemeTheme = () => {
  const colorScheme = useColorScheme() || 'light';
  return getReferenceTheme(colorScheme);
  // return getFullTheme(colorScheme, 'comp');
};
