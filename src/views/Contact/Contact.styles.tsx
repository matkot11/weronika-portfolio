import styled from 'styled-components';
import { ReactComponent as ThankYouSVG } from '../../assets/icons/thankYou.svg';

export const Wrapper = styled.div`
  margin: 3.5rem;

  h2 {
    margin-bottom: 1rem;
    font-size: 2.7rem;
  }

  span {
    font-weight: 300;
  }
`;

export const InfoWrapper = styled.div`
  margin: 3.5rem 0;

  h3 {
    margin-bottom: 1rem;
    font-size: 2rem;
  }

  span {
    font-size: 1.8rem;
    font-weight: 300;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    margin: 1rem 0;
    display: flex;
    flex-direction: column;
    font-size: 1.7rem;
    font-weight: 300;

    input {
      padding: 0.5rem;
      margin-top: 0.5rem;
      height: 4.2rem;
      font-size: 1.7rem;
    }

    textarea {
      padding: 0.5rem;
      margin-top: 0.5rem;
      height: 13rem;
      font-size: 1.7rem;
    }
  }

  button {
    margin-top: 1.5rem;
    width: 8.5rem;
    height: 8.5rem;
    border: 1px solid #000;
    border-radius: 50%;
    background-color: #eea304;
    font-size: 1.8rem;
    font-weight: 700;

    &:disabled {
      background-color: #d0cfcf;
      cursor: default;
    }
  }
`;

export const ThankYouWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h4 {
    margin: 2rem 0;
    font-size: 2.5rem;
  }

  button {
    padding: 1rem;
    font-size: 1.7rem;
    border: 2px solid #eea304;
  }
`;

export const StyledThankYouSVG = styled(ThankYouSVG)`
  width: 60%;
  height: auto;
`;
