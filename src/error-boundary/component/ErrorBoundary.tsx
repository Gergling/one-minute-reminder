import { PropsWithChildren } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Text, View } from "react-native";

type ErrorBoundaryProps = PropsWithChildren & {
  error: string;
}

// TODO: Can we call this "ErrorBoundary"?
export const AppErrorBoundary = ({ children, error }: ErrorBoundaryProps) => {
  return <ErrorBoundary fallback={
    <View><Text>{error}</Text></View>
  }>{children}</ErrorBoundary>
};
