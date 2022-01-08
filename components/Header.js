import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import github from "../assets/github.gif";
import linkedin from "../assets/linkedin.gif";
import instagram from "../assets/instagram.gif";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

const Header = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <FirstHeader>
          <span data-aos="fade-left">Hi </span>{" "}
          <span data-aos="fade-left">my name is</span>
        </FirstHeader>
        <SecondHeader data-aos="fade-up">Sara Carlstein.</SecondHeader>
        <ThirdHeader data-aos="fade-up">
          I like building things for the web.
        </ThirdHeader>
        <Paragraph data-aos="fade-left">
          I am a career changer, that has a background in economic and politics
          & now turned into a developer.
        </Paragraph>
        <div className="svg-wrapper">
          <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
            <rect className="shape" height="60" width="320" />
          </svg>
          <div className="text">See my work</div>
        </div>
      </HeaderWrapper>
      <TopMeadiaLinks>
        {isDesktopOrLaptop && <Image src={linkedin} />}
        <Image src={instagram} />
        <Image src={github} />
      </TopMeadiaLinks>
    </HeaderContainer>
  );
};

export default Header;

const FirstHeader = styled.h1`
  margin: 0;
  font-size: 18px;
  font-family: "Rubik", sans-serif;
  letter-spacing: 4px;
  line-height: 20px;
  margin-bottom: 5px;
`;

const SecondHeader = styled.h2`
  margin: 0;
  font-size: 100px;
  text-align: left;
  font-family: "Rubik", sans-serif;
  letter-spacing: 4px;
  line-height: 70px;
  margin-bottom: 5px;
`;

const ThirdHeader = styled.h3`
  margin: 0;
  font-size: 50px;
  letter-spacing: 4px;
  line-height: 50px;
`;

const Paragraph = styled.p`
  font-size: 12px;
  font-family: "Rubik", sans-serif;
  letter-spacing: 4px;
  line-height: 20px;
  margin-bottom: 5px;
`;

const HeaderContainer = styled.div`
  display: flex;
  height: 500px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  width: 600px;
  position: absolute;
  top: 10%;
  left: 30%;
  border: 2px solid black;
`;

const TopMeadiaLinks = styled.div`
  width: 40px;
  height: 40px;
  padding: 15px;
  justify-self: flex-start;
  position: absolute;
  top: 40%;
  left: 2%;
`;
