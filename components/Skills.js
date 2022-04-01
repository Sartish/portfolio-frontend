import React, { useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import DevIcon, { iconList, RandomIcon } from "devicon-react-svg";
import Head from "next/head";
import Aos from "aos";
import "aos/dist/aos.css";

console.log(`Here is a list of icon names used by this component: ${iconList}`);

const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="mt-20 lg:mt-20 lg:mb-20">
      <SkillsContainer>
        <HeaderContainer data-aos="fade-up">
          <h1>Skills & Tools</h1>
          <h2>What I use to create</h2>
        </HeaderContainer>
        <IconWrapper
          data-aos="fade-up"
          className="grid grid-cols-3 md:grid-cols-4 items-center justify-items-center gap-12"
        >
          <StyledIcon>
            <i className="devicon-nextjs-original"></i>
            <IconText>Nextjs</IconText>
          </StyledIcon>
          <StyledIcon>
            <i className="devicon-react-original"></i>
            <IconText>React</IconText>
          </StyledIcon>
          <StyledIcon>
            <i className="devicon-css3-plain"></i>
            <IconText>CSS3</IconText>
          </StyledIcon>
          <StyledIcon>
            <i className="devicon-figma-plain"></i>
            <IconText>Figma</IconText>
          </StyledIcon>
          <StyledIcon>
            <i className="devicon-javascript-plain"></i>
            <IconText>JS</IconText>
          </StyledIcon>
          <StyledIcon>
            <i className="devicon-mongodb-plain"></i>
            <IconText>Mongo</IconText>
          </StyledIcon>
          <StyledIcon>
            <i className="devicon-github-original"></i>
            <IconText>Github</IconText>
          </StyledIcon>
          <StyledIcon>
            <i className="devicon-html5-plain"></i>
            <IconText>HTML5</IconText>
          </StyledIcon>
          <StyledIcon>
            <i className="devicon-git-plain"></i>
            <IconText>Git</IconText>
          </StyledIcon>
          <StyledIcon>
            <i className="devicon-npm-original-wordmark"></i>
            <IconText>NPM</IconText>
          </StyledIcon>
          <StyledIcon>
            <i className="devicon-express-original"></i>
            <IconText>Express</IconText>
          </StyledIcon>
          <StyledIcon>
            <i className="devicon-nodejs-plain"></i>
            <IconText>Nodejs</IconText>
          </StyledIcon>
          <StyledIcon>
            <i className="devicon-materialui-plain"></i>
            <IconText>Material UI</IconText>
          </StyledIcon>
          <StyledIcon>
            <i className="devicon-visualstudio-plain"></i>
            <IconText>Visual Studio</IconText>
          </StyledIcon>
          <StyledIcon>
            <i className="devicon-sass-original"></i>
            <IconText>SASS</IconText>
          </StyledIcon>
        </IconWrapper>
        <HeaderTwo data-aos="fade-up">I also like...</HeaderTwo>
        <More
          data-aos="fade-up"
          className="w-[90%] items-center justify-items-center p-20 grid grid-cols-2 md:grid-cols-4 content-center justify-center gap-10"
        >
          <p>sanity</p>
          <p>jira</p>
          <p>UX/UI</p>
          <p>design</p>
          <p>tailwind</p>
          <p>intelliJ</p>
          <p>design</p>
          <p>content layout</p>
        </More>
      </SkillsContainer>
    </div>
  );
};

export default Skills;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;
const HeaderContainer = styled.div`
  margin-top: 0;
  margin-bottom: 40px;
  text-align: center;
`;
const HeaderTwo = styled.h2`
  font-size: 14px;
  font-family: "Poppins", sans-serif;
  letter-spacing: 4px;
  line-height: 20px;
  text-transform: uppercase;
  font-weight: 600;
  text-align: center;
  margin-top: 25px;
`;

const IconWrapper = styled.div`
  padding: 20px;
  width: 80%;
`;

const StyledIcon = styled.div`
  fill: black;
  width: 60px;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const IconText = styled.h2`
  font-size: 12px;
  padding: 3px;
`;

const More = styled.div``;
