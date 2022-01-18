import styled from "styled-components";
import Image from "next/image";
import DevIcon, { iconList, RandomIcon } from "devicon-react-svg";
import Head from 'next/head'
import ReactIcon from "../assets/icons/ReactIcon"


console.log(`Here is a list of icon names used by this component: ${iconList}`);

const Skills = () => {


	return (
		<>
			<Head>
				<title>My page title</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link rel="stylesheet" href="devicon.min.css" />
			</Head>
			<SkillsContainer>
				<HeaderContainer>
					<HeaderOne>Skills & Tools</HeaderOne>
					<HeaderTwo>What I use to create</HeaderTwo>
				</HeaderContainer>
				<IconWrapper>
					<StyledIcon>
						<i class="devicon-nextjs-original"></i>
						<IconText>Nextjs</IconText>
					</StyledIcon>
					<StyledIcon>
						<i class="devicon-react-original"></i>
						<IconText>React</IconText>
					</StyledIcon>
					<StyledIcon>
						<i class="devicon-css3-plain"></i>
						<IconText>CSS3</IconText>
					</StyledIcon>
					<StyledIcon>
						<i class="devicon-figma-plain"></i>
						<IconText>Figma</IconText>
					</StyledIcon>
					<StyledIcon>
						<i class="devicon-javascript-plain"></i>
						<IconText>JavaScript</IconText>
					</StyledIcon>
					<StyledIcon>
						<i class="devicon-mongodb-plain"></i>
						<IconText>Mongodb</IconText>
					</StyledIcon>
					<StyledIcon>
						<i class="devicon-github-original"></i>
						<IconText>Github</IconText>
					</StyledIcon>
					<StyledIcon>
						<i class="devicon-html5-plain"></i>
						<IconText>HTML5</IconText>
					</StyledIcon>
					<StyledIcon>
						<i class="devicon-git-plain"></i>
						<IconText>Git</IconText>
					</StyledIcon>
					<StyledIcon>
						<i class="devicon-npm-original-wordmark"></i>
						<IconText>NPM</IconText>
					</StyledIcon>
					<StyledIcon>
						<i class="devicon-express-original"></i>
						<IconText>Express</IconText>
					</StyledIcon>
					<StyledIcon>
						<i class="devicon-nodejs-plain"></i>
						<IconText>Nodejs</IconText>
					</StyledIcon>
					<StyledIcon>
						<i class="devicon-materialui-plain"></i>
						<IconText>Material UI</IconText>
					</StyledIcon>
					<StyledIcon>
						<i class="devicon-visualstudio-plain"></i>
						<IconText>Visual Studio</IconText>
					</StyledIcon>
					<StyledIcon>
						<i class="devicon-sass-original"></i>
						<IconText>SASS</IconText>
					</StyledIcon>
				</IconWrapper>
			</SkillsContainer>
		</>
	);
};

export default Skills;


const SkillsContainer = styled.div`
  width: 100%;
  height: 700px;
  background-color: #fdf5df;
  overflow: auto;
	display: flex; 
	justify-content: center; 
	flex-direction: column; 
	align-items: center; 
clip-path: polygon(23% 16%, 100% 0, 100% 50%, 100% 83%, 0 100%, 0 81%, 0 0);
`;
const HeaderContainer = styled.div`
 width 700px;
 padding-left: 30px;
`;
const HeaderOne = styled.h1`
  font-size: 50px;
  letter-spacing: 4px;
  line-height: 50px;
	font-family: "Rubik", sans-serif;
	padding: 10px;
`;
const HeaderTwo = styled.h2`
  font-size: 14px;
  font-family: "Rubik", sans-serif;
  letter-spacing: 4px;
  line-height: 20px;
	padding: 10px;
`;

const IconWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	width: 700px;
	height: 200px;
`;

const StyledIcon = styled.div`
    fill: black;
    width: 60px;
		padding: 20px;
		display: flex; 
		flex-direction: column; 
		text-align: center;
`;

const IconText = styled.h2`
   font-size: 12px;
	 padding: 3px;
`;

