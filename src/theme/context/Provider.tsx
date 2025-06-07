import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { PropsWithChildren, useMemo } from "react";
import { useColorScheme } from "react-native";
import { PaperProvider } from "react-native-paper";
import { darkTheme, lightTheme } from "../constants";

export const AppThemeProvider = ({ children }: PropsWithChildren) => {
  const colorScheme = useColorScheme();
  const theme = useMemo(
    () => colorScheme === 'dark' ? darkTheme : lightTheme,
    [colorScheme]
  );
  const navigationTheme = useMemo(
    () => colorScheme === 'dark' ? DarkTheme : DefaultTheme,
    [colorScheme]
  );

  return <ThemeProvider value={navigationTheme}>
    <PaperProvider theme={theme}>{children}</PaperProvider>
  </ThemeProvider>;
};
