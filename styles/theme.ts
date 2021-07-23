import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    neutral: {
      700: 'hsl(0, 0%, 17%)',
      500: 'hsl(0, 0%, 59%)',
    },
    black: 'hsl(0, 0%, 0%)',
    white: 'hsl(0, 0%, 100%)',
  },
  breakpoint: `(min-width: 900px)`
};
