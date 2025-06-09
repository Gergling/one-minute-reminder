import { AppProvider } from '@/src/application';
import { Controls } from '@/src/controls';
import { AppErrorBoundary } from '@/src/error-boundary';
import { Guide } from '@/src/guide';
import { Interval } from '@/src/interval';
import { Status } from '@/src/status';
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
    <AppProvider>
      <AppErrorBoundary error='Index done did a bad'>
        <Group>
          <Status />
        </Group>
        <Group>
          <Controls />
        </Group>
        <Group>
          <Guide />
        </Group>
        <Interval />
      </AppErrorBoundary>
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
  }
});
