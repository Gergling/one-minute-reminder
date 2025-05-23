import {
  Entypo,
  FontAwesome5,
  FontAwesome6,
  MaterialCommunityIcons
} from "@expo/vector-icons";
// import { Dimensions } from "react-native";

// type ControlName = 'record-empty' | 'record-stop' | 'repeat' | 'stop' | 'play';

const SIZE = 180;

// const getIconSize = () => {
//   const { width, height } = Dimensions.get('window');
//   const size = Math.min(width, height);
//   const margin = 10;
//   const iconSize = (size / 2) - margin;
//   return iconSize;
// }

// export const ControlIcon = ({ name }: { name: ControlName }) => {
//   getIconSize()
// }

// TODO: Theme those colours.
export const ControlIconRecordEmpty = () => <MaterialCommunityIcons name="record-circle" size={SIZE} color="red" />;
export const ControlIconRecordStop = () => <FontAwesome5 name="stop-circle" size={SIZE} color="red" />;
// record but there is a dustbin in the middle... might be more complex
// play button... probably green
// pause (play) button... probably yellow
// I need turning arrows of some kind for the repeat icon
// a generic stop button in the bottom right
export const ControlIconArrowsRotate = () => <FontAwesome6 name="arrows-rotate" size={SIZE} color="black" />;
export const ControlIconRepeatStart = () => <FontAwesome6 name="arrows-rotate" size={SIZE} color="yellow" />;

export const ControlIconStop = () => <FontAwesome6 name="stop-circle" size={SIZE} color="blue" />;

export const ControlIconPlay = () => <Entypo name="controller-play" size={SIZE} color="green" />;
export const ControlIconPause = () => <FontAwesome6 name="pause" size={SIZE} color="black" />;
