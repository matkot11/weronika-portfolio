import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  margin: 0 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin: 4rem 0;
    font-size: 2.5rem;
  }

  p {
    font-size: 2rem;
    font-weight: 300;
    line-height: 1.2;
    text-align: center;
  }

  span {
    margin: 2rem 0;
    color: #eea304;
    font-size: 2.2rem;
    font-weight: 550;
    text-align: center;
  }
`;

export const SVGWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;

  svg {
    width: 7rem;
  }
`;

export const ImagesWrapper = styled.div`
  img {
    margin: 2rem 0;
    width: 100%;
  }
`;

export const StyledLink = styled(Link)`
  align-self: flex-start;
  color: #eea304;
  font-size: 2.5rem;
  font-weight: 500;
`;
