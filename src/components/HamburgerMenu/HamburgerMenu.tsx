import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from './HamburgerMenu.styles';

interface HamburgerMenuProps {
  onClick: () => void;
  openMenu: boolean;
}

const HamburgerMenu = ({ openMenu, onClick }: HamburgerMenuProps) => {
  const topLine = useRef<HTMLSpanElement>(null);
  const middleLine = useRef<HTMLSpanElement>(null);
  const bottomLine = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (openMenu) {
      const tl = gsap.timeline();
      tl.to(topLine.current, { rotation: 45, y: 9, ease: 'power2.inOut', duration: 0.3 }, 0)
        .to(middleLine.current, { autoAlpha: 0, duration: 0.3 }, 0)
        .to(bottomLine.current, { rotation: 135, y: -9, ease: 'power2.inOut', duration: 0.3 }, 0);
    }

    if (!openMenu) {
      const tl = gsap.timeline();
      tl.to(topLine.current, { rotation: 0, y: 0, ease: 'power2.inOut', duration: 0.3 }, 0)
        .to(middleLine.current, { autoAlpha: 1, duration: 0.3 }, 0)
        .to(bottomLine.current, { rotation: 0, y: 0, ease: 'power2.inOut', duration: 0.3 }, 0);
    }
  }, [openMenu]);

  return (
    <Button onClick={onClick}>
      <span ref={topLine}></span>
      <span ref={middleLine}></span>
      <span ref={bottomLine}></span>
    </Button>
  );
};

export default HamburgerMenu;
