import { InnerWrapper, Logo, RolesWrapper, Wrapper } from './Navbar.styles';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import Navigation from '../Navigation/Navigation';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setOpenMenu] = useState(false);

  return (
    <Wrapper>
      <InnerWrapper>
        <Logo to='/'>
          <svg width='25' height='25' fill='#eea304'>
            <circle cx='12.5' cy='12.5' r='12.5' />
          </svg>
          <h1>Weronika Koziol</h1>
        </Logo>
        <HamburgerMenu onClick={() => setOpenMenu(!isMenuOpen)} openMenu={isMenuOpen} />
      </InnerWrapper>
      <RolesWrapper>
        <span>Photographer</span>
        <span>Graphic Designer</span>
      </RolesWrapper>
      {isMenuOpen && <Navigation openMenu={isMenuOpen} onClick={() => setOpenMenu(false)} />}
    </Wrapper>
  );
};

export default Navbar;
