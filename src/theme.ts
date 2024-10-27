import { DefaultTheme } from "styled-components";

const theme = {
  spacing: {
    padding: {
      small: "8px",
      normal: "16px",
      large: "32px",
      gigantic: "64px",
    },
    buffer: {
      small: "6px",
      normal: "12px",
      large: "24px",
      gigantic: "36px",
    },
  },
  colors: {
    gallade: "#1f5080",
    epTeiler: "#ffd744",
    background: "#ffffff",
    germany: {
      black: "#000000",
      red: "#fe0000",
      gold: "#faaf3a",
      gradiant: (theme: DefaultTheme): string => `linear-gradient(90deg, ${theme.colors.germany.black} 0%, ${theme.colors.germany.red} 40%, ${theme.colors.germany.gold} 75%)`
    },
    text: {
      dark: "#000000",
      bright: "#ffffff",
    },
  },
  sizes: {
    font: {
      small: "16px",
      normal: "24px",
      large: "32px",
      gigantic: "48px",
    },
    header: {
      icons: 64,
      menu: 48,
    },
    maxContentWidth: "1400px"
  },
  breakpoints: {
    tiny: 700,
    small: 1550,
  },
  accessibility: {
    focussed: {
      outlineWidth: "1px",
    },
  },
};

export { theme };
