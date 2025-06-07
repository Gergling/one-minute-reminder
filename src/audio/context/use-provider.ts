import { useContext } from 'react';
import { AudioContext } from './Context';

export const useAudio = () => useContext(AudioContext);
