import styled from 'styled-components';

export const CountriesListContainer = styled.div`
  background-color: #fff;
  border-radius: 4px;

  h3 {
    display: flex;
    justify-content: space-between;
    padding: 8px 16px;

    > strong {
    font-weight: 600;
    }
  }

  > ul {
    height: 400px;
    overflow: auto;
    padding: 16px;
  }
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
`; 

export const CountryFlag = styled.img`
  max-width: 20px;
  margin-right: 8px;
  width: 100%;
`;
