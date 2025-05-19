// The point of this is to configure the relative main button
// colours from a single place.

import { useTheme } from "react-native-paper";

type MainButtonNames = 'play' | 'record' | 'repeat' | 'stop';
type MainButtonProps = {
  buttonColor: string;
  iconSource: string;
  textColor: string;
};
type MainButtonConfigProps = {
  [key in MainButtonNames]: MainButtonProps;
};

export const useMainButtonProps = () => {
  const { colors } = useTheme();
  const props: MainButtonConfigProps = {
    play: {
      buttonColor: colors.tertiaryContainer,
      iconSource: 'play',
      textColor: colors.onTertiaryContainer,
    },
    record: {
      buttonColor: colors.errorContainer,
      iconSource: 'record-circle',
      textColor: colors.onErrorContainer,
    },
    repeat: {
      buttonColor: colors.primary,
      iconSource: 'rotate-right',
      textColor: colors.onPrimary,
    },
    stop: {
      buttonColor: colors.secondaryContainer,
      iconSource: 'stop-circle-outline',
      textColor: colors.onSecondaryContainer,
    },
  };
  return props;
};
