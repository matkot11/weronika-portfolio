import productPhotographyImage from '../../assets/images/designTypo.webp';
import graphicDesignImage from '../../assets/images/apart.webp';
import motionDesignImage from '../../assets/images/motionDesign.webp';
import { ProjectWrapper, StyledLink, Wrapper } from './Projects.styles';

const Projects = () => (
  <Wrapper>
    <h2>Projects</h2>
    <ProjectWrapper to='/'>
      <img src={productPhotographyImage} alt='Product photography' />
      <h3>Product Photography 01</h3>
    </ProjectWrapper>
    <ProjectWrapper to='/'>
      <img src={graphicDesignImage} alt='Graphic design' />
      <h3>Graphic Design 02</h3>
    </ProjectWrapper>
    <ProjectWrapper to='/'>
      <img src={motionDesignImage} alt='Motion design' />
      <h3>After Effects 03</h3>
    </ProjectWrapper>
    <hr />
    <p>
      Weronika Koziol is a passionate photographer and graphic designer. She shoots a diverse range
      of subjects for commercial and editorial purposes, as well as creates exceptional graphic
      designs.
    </p>
    <StyledLink to='/contact'>Let&apos;s work together</StyledLink>
  </Wrapper>
);

export default Projects;
