import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    neutral: {
      700: 'hsl(0, 0%, 17%)',
      500: 'hsl(0, 0%, 59%)',
      300: 'hsl(0, 0%, 89%)',
    },
    black: 'hsl(0, 0%, 0%)',
    blackActive: 'hsl(0, 0%, 25%)',
    white: 'hsl(0, 0%, 100%)',
    error: 'hsl(4, 90%, 58%)',
  },
  breakpoint: '(min-width: 900px)',
};

export default theme;
