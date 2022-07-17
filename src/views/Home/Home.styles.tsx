import styled from 'styled-components';
import { ReactComponent as CircleSVG } from '../../assets/icons/circle.svg';

export const Wrapper = styled.div`
  margin-top: 5rem;
  display: grid;
  grid-template-columns: repeat(10, 10vw);
  grid-template-rows: repeat(28, 5rem);

  h2 {
    grid-column: 2 / 5;
    grid-row: 9 / 10;
    font-size: 4rem;
  }

  span {
    grid-column: 2 / -1;
    grid-row: 10 / 11;
    align-self: center;
    font-size: 1.9rem;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }

  p {
    grid-column: 2 / -2;
    grid-row: 11 / 19;
    justify-self: center;
    font-size: 1.8rem;
    font-weight: 300;
    line-height: 1.4;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  grid-row: 1 / 6;
  grid-column: 1 /-1;
  width: 30rem;
  justify-self: center;

  img {
    aspect-ratio: 1 / 1;
    width: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const ImageBackground = styled(CircleSVG)`
  position: absolute;
  top: -30px;
  left: 20px;
  width: 100%;
  z-index: -1;
`;

export const YellowCircle = styled(CircleSVG)`
  grid-column: 2 / 3;
  grid-row: 7 / 9;
  width: 6rem;
`;

export const RedCircle = styled(CircleSVG)`
  grid-column: 5 / 7;
  grid-row: 8 / 10;
  width: 10rem;
`;

export const BlueCircle = styled(CircleSVG)`
  grid-column: 9 / 10;
  grid-row: 7 / 8;
  width: 5.5rem;
`;
export const ProjectsWrapper = styled.ul`
  padding: 0 2rem 0 2rem;
  grid-column: 1 / -1;
  grid-row: 20 / -1;
  background-color: #eea304;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;

  li {
    position: relative;
    text-align: left;
    font-size: 2.8rem;
    font-weight: ${({ theme }) => theme.fontWeight.bold};

    &::before {
      position: absolute;
      top: -35px;
    }

    &:nth-child(1)::before {
      content: '01';
    }

    &:nth-child(2)::before {
      content: '02';
    }

    &:nth-child(3)::before {
      content: '03';
    }
  }
`;
