import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    primary: 'hsl(172, 67%, 45%)', // strong cyan
    neutral: {
      500: 'hsl(184, 14%, 56%)',
    },
    white: 'hsl(0, 0%, 100%)',
  },
  breakpoint: `(min-width: 900px)`
};
