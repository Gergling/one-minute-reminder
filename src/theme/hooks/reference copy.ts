// import { useColorScheme } from "react-native";
// import themes from "..";
// import { getPathBits, getToken } from "../utils";

// export const useReferenceTheme = (path?: string) => {
//   const colorScheme = useColorScheme() || 'light';
//   const theme = themes[colorScheme];

//   if (!path) return theme;

//   const pathBits = getPathBits(path);
//   const designSystemName = pathBits.shift();
//   const tokenClass = pathBits.shift();
//   // The design system can be called '1rm'.
//   // TODO: ref/sys/comp root token name.
//   return getToken(path, theme);
// };
