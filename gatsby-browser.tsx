import { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "./src/theme";
import React from "react";
import { WrapRootElementBrowserArgs } from "gatsby";

type Theme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}

const GlobalStyle = createGlobalStyle`
  html {
    overflow: hidden;
  }
  body {
    height: 100vh;
  }
  body, h1, p {
    margin: 0;
  }`;

export const wrapRootElement: React.FC<WrapRootElementBrowserArgs> = ({
  element,
}) => (
  <>
    <GlobalStyle />
      <ThemeProvider theme={theme}>
        {element}
      </ThemeProvider>
  </>
);
