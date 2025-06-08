import { PropsWithChildren } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { View } from "react-native";
import { Text } from "react-native-paper";

type ErrorBoundaryProps = PropsWithChildren & {
  error: string;
}

export const AppErrorBoundary = ({ children, error }: ErrorBoundaryProps) => {
  return <ErrorBoundary fallback={
    <View><Text>{error}</Text></View>
  }>{children}</ErrorBoundary>
};
