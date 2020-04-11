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
  color: #474747;
  font-size: 24px;
  font-weight: 700;

  > span {
    font-size: 12px;
    line-height: 18px;
    display: block;

    ${media.tablet`
      font-size: 24px;
      font-weight: 400;
      display: inline-block;
    `}
  }
`;

export const HeaderSocialMedia = styled.div`
  display: flex;
`;
