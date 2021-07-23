// import original module declarations
import 'styled-components';

interface Neutral {
  500: string;
}

interface Colors {
  primary: string;
  neutral: Neutral;
  white: string;
}

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors;
    breakpoint: string;
  }
}