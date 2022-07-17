import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #fff;
  z-index: 100;
`;

export const List = styled.ul`
  margin-top: 13rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  li {
    margin: 1rem;
    display: flex;
    align-items: center;
    font-size: 2.2rem;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
  }
`;
