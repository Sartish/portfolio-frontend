import React from "react";
import styled from "styled-components";
import Image from "next/image"
import me from "../assets/me.svg"

const AboutMe = () => {
	return (
		<Container>
			<HeaderWrapper><Border></Border>About me<HeaderText></HeaderText></HeaderWrapper>
			<Wrapper>
				<Text>
					Hello there my friend! I am a frontend developer with a interest in both design and
					content creation. I aim to combine my code skills & passion for
					meaningful product & service ideas. To create user-friendly digital
					platforms that are innovative and creative.
				</Text>
				<ImageContainer><Image src={me}></Image></ImageContainer>
			</Wrapper>
		</Container>
	);
};

export default AboutMe;

const Container = styled.div`
	@import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
	font-family: 'Rubik', sans-serif;
`;
const HeaderWrapper = styled.div`
  width: 600px;
	display: flex; 
	justify-content: center; 
	align-items: center; 
`;
const HeaderText = styled.h1`
width: 200px;
`;

const Border = styled.hr`
  border: 1px solid black;
	width: 200px;
	height: 0.5px;
	background-color: black; 
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
	padding: 20px;

`;

const Text = styled.div`
  letter-spacing: 2px;
  line-height: 20px;
	font-size: 12px;
`;

const ImageContainer = styled.div`
	width: 700px;
`;



