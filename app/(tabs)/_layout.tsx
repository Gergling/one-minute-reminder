import React from 'react';

import { AudioContextProvider } from '@/src/audio/context/Provider';
import { Controls } from '@/src/controls';
import { Guide } from '@/src/guide';
import { Interval } from '@/src/interval';
import { Status } from '@/src/status';
import { AppThemeProvider } from '@/src/theme';

export default function TabLayout() {
  return (
    <AppThemeProvider>
      <AudioContextProvider>
        <Status />
        <Controls />
        <Guide />
        <Interval />
      </AudioContextProvider>
    </AppThemeProvider>
  );
}
