import { useFonts } from 'expo-font';
import 'react-native-reanimated';

import { ErrorBoundary } from '@/src/error';
import { AppThemeProvider } from '@/src/theme';
import { Stack } from 'expo-router';

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ErrorBoundary error="Router done did a bad">
      <AppThemeProvider>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
        </Stack>
      </AppThemeProvider>
    </ErrorBoundary>
  );
}
