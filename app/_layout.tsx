import { useFonts } from 'expo-font';
import 'react-native-reanimated';

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
    <AppThemeProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </AppThemeProvider>
  );
}
