import { useContext } from 'react';
import { AudioContext } from '../context';

export const useAudio = () => useContext(AudioContext);
