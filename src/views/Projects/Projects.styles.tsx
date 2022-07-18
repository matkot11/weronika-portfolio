import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  margin: 3rem;

  h2 {
    margin-bottom: 2rem;
    font-size: 3rem;
  }

  p {
    margin: 1rem 0 2rem 0;
    width: 95%;
    font-size: 2.1rem;
    font-weight: 300;
    line-height: 1.3;
  }

  hr {
    height: 1px;
    background-color: #000;
    border: none;
  }
`;

export const ProjectWrapper = styled(Link)`
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-bottom: 2rem;
    width: 100%;
    height: 23rem;
    object-fit: cover;
  }

  h3 {
    align-self: flex-start;
    font-size: 2.1rem;
    font-weight: 300;
  }
`;

export const StyledLink = styled(Link)`
  color: #eea304;
  text-decoration: underline;
  font-size: 2.3rem;
`;
