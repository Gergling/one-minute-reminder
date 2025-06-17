import { PropsWithChildren } from "react";
import { ErrorBoundary as BaseErrorBoundary } from "react-error-boundary";
import { Text, View } from "react-native";

type ErrorBoundaryProps = PropsWithChildren & {
  error: string;
}

export const ErrorBoundary = ({ children, error }: ErrorBoundaryProps) => {
  return <BaseErrorBoundary fallback={
    <View><Text>{error}</Text></View>
  }>{children}</BaseErrorBoundary>
};