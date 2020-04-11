import styled from 'styled-components';
import { media } from 'styles/media';

export const AsideContent = styled.aside`
  background-color: rgb(221, 221, 221);
  border-right: 2px solid #ddd;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
  color: #4c4c4c;
  display: none;
  max-width: 380px;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 24px;
  position: relative;
  width: 100%;
  z-index: 1;

  ${media.desktop`
    display: block;
  `}

  .chart-area {
    align-items: center;
    background-color: #fff;
    border: 1px solid rgb(204,204,204);
    display: flex;
    justify-content: center;
    margin-top: 24px;
    padding: 8px;
  }
`;

export const AsideContainer = styled.div`
  background-color: #fff;
  border: 1px solid rgb(204, 204, 204);
  border-radius: 4px;
  padding: 16px;

  > h2 {
    color: #ef3b2c;
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 16px;
  }

  > p {
    font-size: 18px;

    &.active-cases {

    }
    &.deaths {
      color: #777;
    }
    &.recovered {
      color: #198700
    }
  }
  > p:not(:last-child) {
    margin-bottom: 16px;
  }

  p > small {
    font-size: 14px;
  }
`;

