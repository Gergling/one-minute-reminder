import { useAudio } from "@/src/audio";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Button, KeyboardAvoidingView, Modal, Platform, StyleSheet, TextInput, View } from "react-native";

type KeyOfTextInput = keyof Pick<TextInput, 'focus' | 'blur'>;

type ModalInputProps = {
  initialText: string;
  onClose: () => void;
  onSubmit: (updatedText: string) => void;
  visible: boolean;
};

const ModalInput = ({ initialText, onClose, onSubmit, visible }: ModalInputProps) => {
  const [text, setText] = useState<string>(initialText);
  // const [isKeyboardVisible, setIsKeyboardVisible] = useState<boolean>(false);
  // TODO: Check if text is numeric.
  // If not, disallow submission and warn.
  const handleSubmit = () => {
    onClose();
    onSubmit(text);
  };
  const textInputRef = useRef<TextInput>(null);
  const { current: textInput } = textInputRef;
  const getTextInputFunction = useCallback((): KeyOfTextInput => visible ? 'focus' : 'blur', [visible]);
  const handleTextInputFocus = useCallback(
    () => {
      if (textInput) {
        textInput[getTextInputFunction()]();
      }
    },
    [getTextInputFunction, textInput]
  );
  useEffect(handleTextInputFocus, [handleTextInputFocus]);
  useEffect(() => setText(initialText), [initialText]);
  return (
    <Modal visible={visible} transparent={true} style={{justifyContent:'center'}}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{
          height: 100,
          // padding: 20,
          // width: '200%',
          width: 100,
          alignSelf: 'center',
          // justifyContent: 'center',
          backgroundColor: 'white',
        }}
      >
        <TextInput
          // autoFocus
          inputMode="numeric"
          onChangeText={setText}
          placeholder={'Enter an interval'}
          ref={(ref) => {textInputRef.current = ref;}}
          value={text}
        />
        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
          <Button title="close" onPress={onClose} />
          <Button title="ok" onPress={handleSubmit} />
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 50,
    marginTop: 50,
    textAlign: 'center',
  },
});

export const Interval = () => {
  const [showInput, setShowInput] = useState<boolean>(false);
  const { handleIntervalChange, interval } = useAudio();
  const intervalString: string = useMemo(() => interval !== null ? interval.toString() : '', [interval]);
  const onChange = (updatedText: string) => {
    if (updatedText === '') {
      handleIntervalChange(null);
      return;
    }

    const updatedNumber = +updatedText;
    if (!isNaN(updatedNumber)) {
      handleIntervalChange(updatedNumber);
    }
  }

  const handleEdit = () => setShowInput(true);
  const handleClose = () => setShowInput(false);
  const handleSubmit = (updatedText: string) => {
    console.log('submitted updated text', updatedText)
    onChange(updatedText);
    handleClose();
  }

  // TODO: Need more modal styling.
  return (
    <>
      <ModalInput
        initialText={intervalString}
        onClose={handleClose}
        onSubmit={handleSubmit}
        visible={showInput}
      />
      <Button title={intervalString} onPress={handleEdit} />
    </>
  );
};
