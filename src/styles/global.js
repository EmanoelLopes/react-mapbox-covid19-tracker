import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 15px;
  }

  body {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  [data-react-root="app"],
  .App,
  .mapContainer,
  .mapBox {
    height: 100%;
    width: 100%;
  }

  .App {
    display: flex;
    font-family: 'Ubuntu', sans-serif;
  }

  .aside-content {
    background-color: #4c4c4c;
    color: #fff;
    max-width: 300px;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 16px;
    width: 100%;

    p {
      font-size: 18px;
    }
  }

  .mapboxgl-popup {
    color: #424242;
    font-family: 'Ubuntu', sans-serif;
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
        font-size: 1.2rem;
        color: #212121;
        padding: 0 5px;
      }
    }

    img {
      display: block;
      width: 3rem;
      height: 3rem;
    }
  }
`;

export default GlobalStyle;