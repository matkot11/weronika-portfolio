import FaceImage from '../../assets/images/face.webp';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import {
  BlueCircle,
  ImageBackground,
  ImageWrapper,
  ProjectsWrapper,
  RedCircle,
  Wrapper,
  YellowCircle,
} from './Home.styles';

const Home = () => {
  const yellowCircle = useRef<HTMLOrSVGElement>(null);
  const redCircle = useRef<HTMLOrSVGElement>(null);
  const blueCircle = useRef<HTMLOrSVGElement>(null);
  const projects = useRef<HTMLLIElement[]>([]);

  useEffect(() => {
    const tl = gsap.timeline();

    gsap.registerPlugin(ScrollTrigger);

    tl.fromTo(
      yellowCircle.current,
      { scaleX: 0.9, scaleY: 0.9 },
      {
        scaleX: 1,
        scaleY: 1,
        yoyo: true,
        repeat: -1,
        ease: 'Power2.inOut',
        duration: 1.5,
      },
    )
      .fromTo(
        redCircle.current,
        { scaleX: 0.95, scaleY: 0.95 },
        {
          scaleX: 1,
          scaleY: 1,
          yoyo: true,
          repeat: -1,
          ease: 'Power2.inOut',
          duration: 1,
        },
        '+=0.5',
      )
      .fromTo(
        blueCircle.current,
        { scaleX: 0.9, scaleY: 0.9 },
        {
          scaleX: 1,
          scaleY: 1,
          yoyo: true,
          repeat: -1,
          ease: 'Power2.inOut',
          duration: 1,
        },
        '=+0.8',
      );

    gsap.fromTo(
      projects.current,
      {
        autoAlpha: 0,
        x: 20,
      },
      {
        autoAlpha: 1,
        x: 0,
        stagger: 0.1,
        scrollTrigger: {
          trigger: projects.current[0],
          start: 'top bottom',
        },
        ease: 'Power2.inOut',
        duration: 1,
      },
    );
  }, []);

  return (
    <Wrapper>
      <ImageWrapper>
        <img src={FaceImage} alt='Face' />
        <ImageBackground fill='#eea304' />
      </ImageWrapper>
      <YellowCircle ref={yellowCircle} fill='#eea304' />
      <RedCircle ref={redCircle} fill='#ff3b25' />
      <BlueCircle ref={blueCircle} fill='#80D8DA' />
      <h2>Hello</h2>
      <span>Nice to meet you all!!!</span>
      <p>
        My name is Weronika Koziol. I received my Bachelor&apos;s degree in Media Production from De
        Montfort University in Leicester. I have lived in the United Kingdom for four years, where I
        have developed both my photography and graphic design skills. In the course of my studies, I
        have acquired skills in Adobe programs such as Photoshop, Lightroom, Premiere Pro,
        Illustrator, and After Effects. I also acquired technical experience in the field of
        production processes. I am looking forward to working with you.
      </p>
      <ProjectsWrapper>
        <li
          ref={(element: HTMLLIElement) => {
            projects.current[0] = element;
          }}
        >
          <Link to='/'>Product Photography 01</Link>
        </li>
        <li
          ref={(element: HTMLLIElement) => {
            projects.current[1] = element;
          }}
        >
          <Link to='/projects/graphic-design'>Graphic Design 02</Link>
        </li>
        <li
          ref={(element: HTMLLIElement) => {
            projects.current[2] = element;
          }}
        >
          <Link to='/'>After Effects 03</Link>
        </li>
      </ProjectsWrapper>
    </Wrapper>
  );
};
export default Home;
