import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${reset}
  *, *::before, *::after { box-sizing: border-box }

  html {
    box-sizing: border-box;
    font-family: 'Archivo', sans-serif;
    font-size: 15px;
  }

  body {
    margin: 0;
    padding: 0;
  }

  html,
  body,
  [data-react-root="app"] {
    width: 100vw;
    height: 100vh;
    overflow: auto;
  }

  /* MapboxGL Custom Styles */
  .mapboxgl-popup {
    color: #424242;
    font-size: 15px;
    margin: 0;
    padding: 0;
  }

  .mapboxgl-popup-content {
    padding: 1rem;
    margin: 0;

    > * {
      margin: 0 0 0.5rem;
      padding: 0;

      &:last-child {
        margin-bottom: 0;
      }
    }

    p {
      border-bottom: 1px solid rgba(black, 0.2);

      b {
        font-size: 1rem;
        font-weight: 600;
        color: #4c4c4c;
        padding: 0 5px;
      }
    }

    img {
      display: block;
      width: 2rem;
      height: 2rem;
    }
  }
`;

export default GlobalStyle;
