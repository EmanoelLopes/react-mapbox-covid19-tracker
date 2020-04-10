import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box }

  html {
    box-sizing: border-box;
    font-family: 'Ubuntu', sans-serif;
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
  }

  .aside-content {
    background-color: rgb(221, 221, 221);
    color: #4c4c4c;
    max-width: 340px;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 24px;
    position: relative;
    width: 100%;

    .aside-container {
      background-color: #fff;
      border: 1px solid rgb(204, 204, 204);
      border-radius: 4px;
      padding: 16px;
    }

    h1 {
      font-weight: 600;
      text-align: center;
    }

    p {
      font-size: 18px;
    }

    .search {
      border-top: 2px solid #dddddd;
    }

    .search .search-form {
      position: relative;
      display: flex;
      height: 70px;
    }

    .search .search-form input {
      border: 1px solid rgb(204, 204, 204);
      border-radius: 4px;
      padding: 12px;
      position: absolute;
      width: 100%;
    }

    .search .search-form .search-submit {
      border: none;
      background-color: transparent;
      position: absolute;
      right: 0;
      top: 8px;
    }

    .search-result {
      background-color: #fff;
      border: 1px solid rgb(204, 204, 204);
      border-radius: 4px;
      padding: 16px;
    }

    .social-media {
      align-items: center;
      bottom: 0;
      display: flex;
      justify-content: center;
      left: 0;
      padding: 16px;
      position: absolute;
      width: 100%;
    }
  }

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
