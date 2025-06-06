import { AudioContextProvider } from '@/src/audio/context/Provider';
import { Controls } from '@/src/controls';
import { Guide } from '@/src/guide';
import { Interval } from '@/src/interval';
import { Status } from '@/src/status';
import { AppThemeProvider } from '@/src/theme';
import { PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

const Group = ({ children }: PropsWithChildren) => <Card
  mode='elevated'
  style={styles.card}
>
  <Card.Content>{children}</Card.Content>
</Card>;

export default function HomeScreen() {
  return (
    <AppThemeProvider>
      <AudioContextProvider>
        <Group>
          <Status />
        </Group>
        <Group>
          <Controls />
        </Group>
        <Group>
          <Guide />
          <Interval />
        </Group>
      </AudioContextProvider>
    </AppThemeProvider>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
  }
});
