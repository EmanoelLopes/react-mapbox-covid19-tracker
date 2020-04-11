import styled from 'styled-components';
import { media } from 'styles/media';

export const HeaderWrapper = styled.header`
  align-items: center;
  border-bottom: 2px solid #ddd;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  padding: 8px 16px;
`;

export const HeaderTitle = styled.h1`
  border-right: 2px solid #ddd;
  color: #474747;
  font-size: 18px;
  font-weight: 700;
  margin-right: 8px;

  ${media.tablet`
    border: none;
    font-size: 24px;
    margin-right: 0;
  `}

  > span {
    display: block;
    font-size: 12px;
    line-height: 18px;
    margin-right: 8px;

    ${media.tablet`
      font-size: 24px;
      font-weight: 400;
      margin-right: 0;
    `}
  }
`;

export const HeaderSocialMedia = styled.div`
  display: flex;
`;
