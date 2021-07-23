import { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      /* BEGIN RESET */

      /* Box sizing rules */
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      /* Remove default padding */
      ul[class],
      ol[class] {
        padding: 0;
      }

      /* Remove default margin */
      body,
      h1,
      h2,
      h3,
      h4,
      h5,
      p,
      ul[class],
      ol[class],
      li,
      figure,
      figcaption,
      blockquote,
      dl,
      dd {
        margin: 0;
      }

      /* Set core body defaults */
      body {
        scroll-behavior: smooth;
        text-rendering: optimizeSpeed;
        line-height: 1.6;
      }

      /* Remove list styles on ul, ol elements with a class attribute */
      ul[class],
      ol[class] {
        list-style: none;
      }

      /* A elements that don't have a class get default styles */
      a:not([class]) {
        text-decoration-skip-ink: auto;
      }

      /* Make images easier to work with */
      img {
        max-width: 100%;
        display: block;
      }

      /* Natural flow and rhythm in articles by default */
      article > * + * {
        margin-top: 1em;
      }

      /* Inherit fonts for inputs and buttons */
      input,
      button,
      textarea,
      select {
        font: inherit;
      }

      /* Remove all animations and transitions for people that prefer not to see them */
      @media (prefers-reduced-motion: reduce) {
        * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
          scroll-behavior: auto !important;
        }
      }

      /* END RESET */

      /* Setting a custom property here for all the border radius settings will be helpful */
      :root {
        --br: 16px;
      }

      html,
      body {
        font-family: "Rubik", sans-serif;
        font-size: 1.125rem; // 18px base
        height: 100%;
        margin: 0;
        padding: 0;
      }

      #__next {
        height: 100%;
      }

      .App {
        height: 100%;
      }

      main {
        height: 100%;
      }
      
      h1 {
        color ${colors.white};
      }
    `;
  }}
`;

export default GlobalStyle;