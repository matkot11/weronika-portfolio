import { ImagesWrapper, StyledLink, SVGWrapper, Wrapper } from './GraphicDesign.styles';
import { ReactComponent as PhotoshopSVG } from '../../assets/icons/photoshop.svg';
import { ReactComponent as IllustratorSVG } from '../../assets/icons/illustrator.svg';
import apartImage from '../../assets/images/apart.webp';
import designTypoImage from '../../assets/images/designTypo.webp';
import boldImage from '../../assets/images/bold.webp';
import retroImage from '../../assets/images/retro.webp';
import leavesImage from '../../assets/images/leaves.webp';
import portraitImage from '../../assets/images/portrait.webp';

const GraphicDesign = () => (
  <Wrapper>
    <h2>GRAPHIC DESIGN</h2>
    <p>
      The following artwork has been created to assist in a better understanding of both advertising
      design and illustration.
    </p>
    <span>The following programs were used in the creative process:</span>
    <SVGWrapper>
      <PhotoshopSVG />
      <IllustratorSVG />
    </SVGWrapper>
    <ImagesWrapper>
      <img src={apartImage} alt='Apart' />
      <img src={designTypoImage} alt='Design typo' />
      <img src={boldImage} alt='Bold' />
      <img src={retroImage} alt='Retro' />
      <img src={leavesImage} alt='Leaves' />
      <img src={portraitImage} alt='Portrait' />
    </ImagesWrapper>
    <StyledLink to='/projects/after-effects'>After Effects</StyledLink>
  </Wrapper>
);

export default GraphicDesign;
