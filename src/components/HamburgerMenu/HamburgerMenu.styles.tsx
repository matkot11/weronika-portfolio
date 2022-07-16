import styled from 'styled-components';

export const Button = styled.button`
  width: 2.8rem;
  height: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 999;

  span {
    border-bottom: 2.5px solid black;
    height: 1px;
    width: 2.8rem;
  }
`;
