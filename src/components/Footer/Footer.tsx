import { CopyWrite, FooterWrapper, InfoWrapper } from './Footer.styles';
import { ReactComponent as LinkedinSVG } from '../../assets/icons/linkedin.svg';

const Footer = () => (
  <FooterWrapper>
    <hr />
    <InfoWrapper>
      <h3>Phone</h3>
      <span>+44 7715476359</span>
    </InfoWrapper>
    <InfoWrapper>
      <h3>Email</h3>
      <span>weronikakoziol99@gmail.com</span>
    </InfoWrapper>
    <InfoWrapper>
      <h3>Follow me</h3>
      <a
        href='https://www.linkedin.com/in/weronika-koziol-6b1316179/'
        target='_blank'
        rel='noreferrer'
      >
        <LinkedinSVG width='18' height='18' />
      </a>
    </InfoWrapper>
    <CopyWrite>&copy; 2022 By Mateusz Kocik</CopyWrite>
  </FooterWrapper>
);

export default Footer;
