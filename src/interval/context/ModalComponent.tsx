import { ThemedView } from "@/components/ThemedView";
import { useEffect, useMemo, useState } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet } from "react-native";
import { Button, Modal, Surface, TextInput, useTheme } from "react-native-paper";
import { isSubmissionTextValid } from "../utils";
import { useIntervalModal } from "./use-modal";

export const IntervalModal = () => {
  // State.
  const {
    initialText,
    isOpen,
    onClose,
    onSubmit,
  } = useIntervalModal();
  const { roundness } = useTheme();
  const [text, setText] = useState<string>(initialText);
  const isTextValid = useMemo(
    () => isSubmissionTextValid(initialText, text),
    [initialText, text]
  );
  const handleSubmit = () => {
    if (isTextValid) {
      onClose();
      onSubmit(text);
    }
  };

  // Side effect: We need to mount the initial text state, because having the
  // text formatted version of the interval in the main reducer is overkill.
  useEffect(() => setText(initialText), [initialText]);

  // Render.
  return (
    <Modal visible={isOpen}>
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
          <ThemedView style={{ display: 'flex', flexDirection: 'row', alignSelf: 'flex-end' }}>
            <Button icon="cancel" mode="outlined" onPress={onClose}>Cancel</Button>
            <Button icon="check" mode="contained" onPress={handleSubmit} disabled={!isTextValid}>Accept</Button>
          </ThemedView>
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
