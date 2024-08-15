import { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "./src/theme";
import React from "react";
import { WrapRootElementBrowserArgs } from "gatsby";

type Theme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }`;

export const wrapRootElement: React.FC<WrapRootElementBrowserArgs> = ({
  element,
}) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{element}</ThemeProvider>
  </>
);
