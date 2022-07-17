import { List, Wrapper } from './Navigation.styles';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

interface DropdownProps {
  openMenu: boolean;
  onClick: () => void;
}

const Navigation = ({ openMenu, onClick }: DropdownProps) => {
  const nav = useRef<HTMLDivElement>(null);
  const [isDropdownOpen, setOpenDropdown] = useState(false);

  useEffect(() => {
    if (openMenu) {
      const tl = gsap.timeline();

      tl.fromTo(nav.current, { autoAlpha: 0, y: 200 }, { autoAlpha: 1, y: 0, duration: 0.5 });
    }

    if (!openMenu) {
      const tl = gsap.timeline();

      tl.fromTo(nav.current, { autoAlpha: 1, y: 0 }, { autoAlpha: 0, y: 200, duration: 0.5 });
    }
  }, [openMenu]);

  return (
    <Wrapper ref={nav}>
      <List>
        <li>
          <button onClick={() => setOpenDropdown((currState) => !currState)}>
            <svg
              width='25'
              height='25'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7' />
            </svg>
          </button>
          <Link to='/projects' onClick={onClick}>
            Projects
          </Link>
        </li>
        {isDropdownOpen && (
          <>
            <li>
              <Link to='/' onClick={onClick}>
                Product Photography
              </Link>
            </li>
            <li>
              <Link to='/' onClick={onClick}>
                Graphic Design
              </Link>
            </li>
            <li>
              <Link to='/' onClick={onClick}>
                After Effects
              </Link>
            </li>
          </>
        )}
        <li>
          <Link to='/' onClick={onClick}>
            Contact
          </Link>
        </li>
      </List>
    </Wrapper>
  );
};

export default Navigation;
