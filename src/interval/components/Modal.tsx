import { useCallback, useEffect, useState } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native";
import { Button, Modal, Surface, TextInput, useTheme } from "react-native-paper";

type ModalInputProps = {
  initialText: string;
  onClose: () => void;
  onSubmit: (updatedText: string) => void;
  visible: boolean;
};

const useEffectHandler = (callback: React.EffectCallback) => useEffect(callback, [callback]);

export const IntervalModal = ({ initialText, onClose, onSubmit, visible }: ModalInputProps) => {
  // State.
  const { roundness } = useTheme();
  const [text, setText] = useState<string>(initialText);
  const [isTextValid, setIsTextValid] = useState<boolean>(true);
  const handleSubmit = () => {
    if (isTextValid) {
      onClose();
      onSubmit(text);
    }
  };

  // Side effects.
  const handleInitialTextState = useCallback(() => setText(initialText), [initialText]);
  const handleTextIsNumeric = useCallback(() => {
    const numericText = +text;
    const valid = !isNaN(numericText)
      && text !== ''
      && text !== initialText
      && numericText >= 1;
    setIsTextValid(valid);
  }, [initialText, text]);

  // Side effect execution.
  useEffectHandler(handleInitialTextState);
  useEffectHandler(handleTextIsNumeric);

  // Render.
  return (
    <Modal visible={visible}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.kav}
      >
        <Surface mode="elevated" style={{...styles.modal, borderRadius: roundness*4 }}>
          <TextInput
            autoFocus
            inputMode="numeric"
            mode="outlined"
            onChangeText={setText}
            placeholder={'Enter an interval'}
            style={styles.input}
            value={text}
          />
          <View style={{ display: 'flex', flexDirection: 'row', alignSelf: 'flex-end' }}>
            <Button icon="cancel" mode="outlined" onPress={onClose}>Cancel</Button>
            <Button icon="check" mode="contained" onPress={handleSubmit} disabled={!isTextValid}>Accept</Button>
          </View>
        </Surface>
      </KeyboardAvoidingView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 20,
  },
  kav: {
    height: 200,
    padding: 20,
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  modal: {
    padding: 20,
  },
});
