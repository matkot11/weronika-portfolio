import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  margin: 2rem;
`;

export const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RolesWrapper = styled.div`
  margin: 1rem 0 0 0.5rem;
  display: flex;
  flex-direction: column;

  span {
    margin-top: 0.2rem;
    letter-spacing: 0.1rem;
  }
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;

  h1 {
    margin-left: 1rem;
    width: min-content;
    font-size: 2.2rem;
    letter-spacing: 0.12rem;
  }
`;
