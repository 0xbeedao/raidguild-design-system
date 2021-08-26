import { extendTheme, Theme } from '@chakra-ui/react';
import { colors } from './colors';
import { Button } from './components/Button';
import { Text } from './components/Text';
import { textStyles } from './texts';
import './globals.css';

export const theme: Theme = extendTheme({
  styles: {
    global: {
      body: {
        color: 'white',
        bg: 'black',
        minHeight: '100vh',
        minWidth: '100vw',
      },
    },
  },
  colors,
  textStyles,
  fonts: {
    texturina: `'Texturina', serif`,
    jetbrains: `'JetBrains Mono', monospace`,
    rubik: `'Rubik Mono One', sans-serif`,
    uncial: `'Uncial Antiqua', cursive`,
    spaceMono: `'Space Mono', monospace;`
  },
  components: {
    Button,
    Text,
  },
});
