import React from 'react';
import * as S from './styled';

const Header = () => (
  <S.HeaderWrapper>
    <S.HeaderTitle>
      Corona Virus (COVID-19){' '}
      <span>
        Global Cases by the Center for Systems Science and Engineering (CSSE) at
        Johns Hopkins University (JHU)
      </span>
    </S.HeaderTitle>
    <S.HeaderSocialMedia>
      <a
        href="https://github.com/EmanoelLopes/react-mapbox-covid19-tracker"
        target="_blank"
        rel="noopener noreferrer"
        title="Github"
      >
        <box-icon type="logo" name="github" size="lg" color="#4c4c5c" />
      </a>
    </S.HeaderSocialMedia>
  </S.HeaderWrapper>
);

export default Header;
