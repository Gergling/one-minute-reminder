import { useAudio } from "@/src/audio";
import { useCallback, useEffect, useMemo, useState } from "react";
import { KeyboardAvoidingView, Platform, View } from "react-native";
import { Button, Modal, TextInput } from "react-native-paper";

// type KeyOfTextInput = keyof Pick<TextInput, 'focus' | 'blur'>;

type ModalInputProps = {
  initialText: string;
  onClose: () => void;
  onSubmit: (updatedText: string) => void;
  visible: boolean;
};

// TODO: Outline the close button to make it clearly not a primary operation.
// Keep it on the right.

// const EffectHandler = ({ callback }: { callback: React.EffectCallback }) => {
//   useEffect(callback, [callback]);
//   return <></>;
// };

// const useEffectHandler = (callbacks: React.EffectCallback[]) => {
//   const [elements, setElements] = useState
//   callbacks.forEach((callback) => {
//     createElement('EffectHandler', { callback });
//   });
//   // useEffect(elements, [elements]);
//   for (const callback in callbacks) {
//     // useEffect(callback, [callback]);
//   }
// }

const useEffectHandler = (callback: React.EffectCallback) => useEffect(callback, [callback]);

// TODO: +/- control for number

const ModalInput = ({ initialText, onClose, onSubmit, visible }: ModalInputProps) => {
  const [text, setText] = useState<string>(initialText);
  const [isTextValid, setIsTextValid] = useState<boolean>(true);
  // const [isKeyboardVisible, setIsKeyboardVisible] = useState<boolean>(false);
  // TODO: Check if text is numeric.
  // If not, disallow submission and warn.
  const handleSubmit = () => {
    if (isTextValid) {
      onClose();
      onSubmit(text);
    }
  };
  // const textInputRef = useRef<TextInput>(null);
  // const { current: textInput } = textInputRef;

  // const getTextInputFunction = useCallback((): KeyOfTextInput => visible ? 'focus' : 'blur', [visible]);

  // Side effects.
  const handleInitialTextState = useCallback(() => setText(initialText), [initialText]);
  // const handleTextInputFocus = useCallback(
  //   () => {
  //     if (textInput) {
  //       textInput[getTextInputFunction()]();
  //     }
  //   },
  //   [getTextInputFunction, textInput]
  // );
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
  // useEffectHandler(handleTextInputFocus);
  useEffectHandler(handleTextIsNumeric);

  // Render.
  return (
    <Modal visible={visible} style={{justifyContent:'center'}}>
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
        {/* <Text>
          Setting interval (previously {initialText}).
        </Text> */}
        <TextInput
          // autoFocus
          inputMode="numeric"
          onChangeText={setText}
          placeholder={'Enter an interval'}
          // ref={(ref) => {textInputRef.current = ref;}}
          value={text}
        />
        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
          <Button icon="cancel" mode="outlined" onPress={onClose}>Cancel</Button>
          <Button icon="check" mode="contained" onPress={handleSubmit} disabled={!isTextValid}>Accept</Button>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

// const styles = StyleSheet.create({
//   text: {
//     color: 'white',
//     fontSize: 50,
//     marginTop: 50,
//     textAlign: 'center',
//   },
// });

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
      <Button onPress={handleEdit}>{intervalString}</Button>
    </>
  );
};
