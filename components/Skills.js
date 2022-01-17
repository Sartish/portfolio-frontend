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
				{/* 		<h1>Skills </h1> */}
				<IconWrapper>
					<StyledIcon>
						<i class="devicon-nextjs-original"></i>
						<i class="devicon-react-original"></i>
						<i class="devicon-css3-plain"></i>
						<i class="devicon-tailwindcss-original-wordmark"></i>
						<i class="devicon-javascript-plain"></i>
					</StyledIcon>
				</IconWrapper>
			</SkillsContainer>
		</>
	);
};

export default Skills;


const SkillsContainer = styled.div`
  width: 100%;
  height: 400px;
  background-color: #fdf5df;
  overflow: auto;
	display: flex; 
	justify-content: center; 
	align-items: center; 
  clip-path: polygon(
    30% 0%,
    30% 0,
    100% 24%,
    100% 100%,
    22% 100%,
    0 100%,
    0 23%
  );
`;


const IconWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	border: 2px solid black; 
	width: 600px;
	height: 300px;
`;

const StyledIcon = styled(DevIcon)`
    fill: black;
    width: 20px;
		border: solid 2px black;
`;
