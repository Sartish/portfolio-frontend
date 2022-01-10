import React from "react";
import styled from "styled-components";

const AboutMe = () => {
	return (
		<Container>
			<Header>About me</Header>
			<Wrapper>
				<Text>
					Hello👋 I am a frontend developer with a interest in both design and
					content creation. I aim to combine my code skills & passion for
					meaningful product & service ideas. To create user-friendly digital
					platforms that are innovative and creative.
				</Text>
				<ImageContainer></ImageContainer>
			</Wrapper>
		</Container>
	);
};

export default AboutMe;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: black solid 2px;
  flex-direction: column;
`;
const Header = styled.h1`
  width: 500px;
  border: black solid 2px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  border: black solid 2px;
`;

const Text = styled.div`
  color: red;
`;

const ImageContainer = styled.div`
  border: 2px solid red;
`;
