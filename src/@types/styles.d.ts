import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      blueDark: string;
      blue: string;
      purpleDark: string;
      purple: string;
      gray700: string;
      gray600: string;
      gray500: string;
      gray400: string;
      gray300: string;
      gray200: string;
      gray100: string;
      danger: string;
    };
    sizes: {
      sm: string;
      md: string;
      lg: string;
    };
    weights: {
      bold: string;
      regular: string;
    };
  }
}
