import { PropsWithChildren } from "react";
import { Text, View } from "react-native";
import BaseErrorBoundary, { FallbackComponentProps } from "react-native-error-boundary";
import { Button, Icon } from "react-native-paper";

type ErrorBoundaryProps = PropsWithChildren & {
  error: string;
}

const Fallback = ({ error, resetError }: FallbackComponentProps) => (
  <View>
    <Text>Oops! Something went wrong:</Text>
    <Text>{error.toString()}</Text>
    <Button onPress={resetError}><Icon size={20} source='reload' />Try again</Button>
  </View>
);

export const ErrorBoundary = ({ children, error }: ErrorBoundaryProps) => {
  return <BaseErrorBoundary FallbackComponent={Fallback}>{children}</BaseErrorBoundary>
};