// import original module declarations
import 'styled-components';

interface Neutral {
  700: string;
  500: string;
  300: string;
}

interface Colors {
  neutral: Neutral;
  black: string;
  blackActive: string;
  white: string;
}

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors;
    breakpoint: string;
  }
}
