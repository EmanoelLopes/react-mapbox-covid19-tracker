import styled from 'styled-components';

export const SearchContainer = styled.div`
  border-top: 2px solid #dddddd;
  padding: 24px 0;

  h2 {
    font-size: 22px;
    margin-bottom: 16px;
  }
`;

export const SearchForm = styled.form`
  display: flex;
  margin-bottom: 24px;
  position: relative;
`;

export const SearchInput = styled.input`
  border-radius: 4px;
  border: 1px solid rgb(204, 204, 204);
  font-size: 16px;
  padding: 12px;
  width: 100%;
`;

export const SearchSubmit = styled.button`
  border: none;
  background-color: transparent;
  position: absolute;
  right: 0;
  top: 8px;
`;

export const SearchResult = styled.div`
  background-color: #fff;
  border: 1px solid rgb(204, 204, 204);
  border-radius: 4px;
  padding: 16px;

  h3 {
    font-size: 18px;
    margin-bottom: 16px; 
  }

  p {
    font-size: 16px;

    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;
