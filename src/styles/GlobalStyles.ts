"use client";
import { createGlobalStyle, css } from "styled-components";

const styles = css`
  //your global styles
  html,
  body {
    height: 100%;
    margin: 0;
    padding: 0;
  }
  #wrap {
    position: relative;
    width: 100%;
    height: 100%;
  }
`;

const GlobalStyles = createGlobalStyle`
  ${styles}
`;

export default GlobalStyles;
