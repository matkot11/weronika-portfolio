import { InnerWrapper, Logo, RolesWrapper, Wrapper } from './Navbar.styles';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import Navigation from '../Navigation/Navigation';
import { useState } from 'react';
import { ReactComponent as CircleSVG } from '../../assets/icons/circle.svg';

const Navbar = () => {
  const [isMenuOpen, setOpenMenu] = useState(false);

  return (
    <Wrapper>
      <InnerWrapper>
        <Logo to='/'>
          <CircleSVG fill='#eea304' width='25' height='25' />
          <h1>Weronika Koziol</h1>
        </Logo>
        <HamburgerMenu
          onClick={() => setOpenMenu((currState) => !currState)}
          openMenu={isMenuOpen}
        />
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
