import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  width: 100px;
  cursor: pointer;
  :not(:last-child) {
    margin-right: 8px;
  }
`;
