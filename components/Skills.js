import styled from "styled-components";
import Image from "next/image";
import DevIcon, { iconList, RandomIcon } from "devicon-react-svg";
import Head from 'next/head'
import ReactIcon from "../assets/icons/ReactIcon"


console.log(`Here is a list of icon names used by this component: ${iconList}`);

const Skills = () => {


	return (
		<div>
			<Head>
				<title>My page title</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link rel="stylesheet" href="devicon.min.css" />
			</Head>
			<SkillsContainer>
				<HeaderContainer>
					<h1>Skills & Tools</h1>
					<h2>What I use to create</h2>
				</HeaderContainer>
				<IconWrapper className="grid grid-cols-3 md:grid-cols-4 items-center justify-items-center gap-12">
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
						<IconText>JavaScript</IconText>
					</StyledIcon>
					<StyledIcon>
						<i className="devicon-mongodb-plain"></i>
						<IconText>Mongodb</IconText>
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
					<StyledIcon>
						<i className="devicon-tailwindcss-original-wordmark"></i>
						<IconText>Tailwind</IconText>
					</StyledIcon>
				</IconWrapper>
				<h2>I also like...</h2>
				<More className="w-[90%] items-center justify-items-center p-20 grid grid-cols-3 md:grid-cols-4 content-center justify-center gap-10">
					<p>sanity</p>
					<p>shopify</p>
					<p>UX/UI</p>
					<p>design</p>
					<p>content layout</p>
					<p>UX/UI</p>
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
const HeaderOne = styled.h1`
  font-size: 30px;
  letter-spacing: 4px;
  line-height: 50px;
`;
const HeaderTwo = styled.h2`
  font-size: 14px;
  font-family: "Rubik", sans-serif;
  letter-spacing: 4px;
  line-height: 20px;
	padding-bottom: 10px;
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

const More = styled.div`

`;