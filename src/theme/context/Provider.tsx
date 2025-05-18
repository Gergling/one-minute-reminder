import { PropsWithChildren } from "react";
import { PaperProvider } from "react-native-paper";
import { useColorSchemeTheme } from "../hooks";

export const AppThemeProvider = ({ children }: PropsWithChildren) => {
  const theme = useColorSchemeTheme();
  return <PaperProvider theme={theme}>{children}</PaperProvider>;
};