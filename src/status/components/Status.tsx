import { useAudio } from "@/src/audio";
import { StyleSheet, Text, View } from "react-native";
import { ActivityIndicator, Icon, Surface, useTheme } from "react-native-paper";

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  surface: {
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  text: {
    color: 'white',
    fontSize: 100,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const SIZE = 280;
type IndicatorProps = { color: string; };

const Spinner = ({ color }: IndicatorProps) => <ActivityIndicator
  animating={true}
  color={color}
  size={SIZE}
/>;

const IndicatorIcon = ({
  color,
  source
}: IndicatorProps & {
  source: string;
}) => <Icon
  color={color}
  size={SIZE}
  source={source}
/>;

const StatusPlay = ({ color }: IndicatorProps) => <>
  <Spinner color={color} />
  <View style={styles.overlay}>
    <IndicatorIcon color={color} source="play" />
  </View>
</>;

const StatusRecord = ({ color }: IndicatorProps) => <>
  <Spinner color={color} />
  <View style={styles.overlay}>
    <IndicatorIcon color={color} source="record" />
  </View>
</>;

const StatusRepeat = ({
  color,
  countdown,
  isPlaying,
}: IndicatorProps & {
  countdown: number;
  isPlaying: boolean;
}) => <>
  <Spinner color={color} />
  <View style={styles.overlay}>
    {isPlaying
      ? <IndicatorIcon color={color} source="play" />
      : <Text style={{...styles.text, color}}>{countdown}</Text>
    }
  </View>
</>;

const StatusStop = ({ color }: IndicatorProps) =>
  <IndicatorIcon color={color} source="stop-circle" />;

const StatusIndicator = () => {
  const { colors: { error, primary, secondary, tertiary }} = useTheme();
  const { countdown, isRepeating, mode } = useAudio();
  
  if (isRepeating && countdown !== undefined)
    return <StatusRepeat color={primary} countdown={countdown} isPlaying={mode === 'playing'} />;
  
  switch (mode) {
    case 'playing': return <StatusPlay color={tertiary} />;
    case 'recording': return <StatusRecord color={error} />;
    default: return <StatusStop color={secondary} />
  }
};

export const Status = () => <Surface
  mode='elevated'
  style={styles.surface}
>
  <StatusIndicator />
</Surface>;
