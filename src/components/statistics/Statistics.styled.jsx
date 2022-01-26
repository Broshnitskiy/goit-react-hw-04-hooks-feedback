import styled from 'styled-components';

export const Container = styled.div`
  border-top: 1px solid orangered;

  h2 {
    margin-bottom: 20px;
  }

  li:not(:last-child) {
    margin-bottom: 10px;
  }

  li:nth-last-of-type(-n + 2) {
    width: 200px;
    background: yellow;
  }
`;
