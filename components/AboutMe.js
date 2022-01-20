import React from "react";
import styled from "styled-components";
import Image from "next/image";
import me from "../assets/me.svg";
import { useMediaQuery } from "react-responsive";



const AboutMe = () => {

	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1023px)" });
	const isDesktopOrLaptop = useMediaQuery({
		query: "(min-width:  1024px)",
	});


	return (
		<>
			{isDesktopOrLaptop && (<Container>
				<HeaderWrapper>
					<HeaderText>About me</HeaderText>
				</HeaderWrapper>
				<Wrapper>
					<Text>
						Hello there my friend! I am a frontend developer with a interest in
						both design and content creation. I aim to combine my code skills &
						passion for meaningful product & service ideas. To create
						user-friendly digital platforms that are innovative and creative.
					</Text>
					<ImageContainer>
						<Image src={me}></Image>
					</ImageContainer>
				</Wrapper>
			</Container>
			)}

			{isTabletOrMobile && (
				<ContainerMobile>
					<HeaderWrapperMobile>
						<HeaderTextMobile>About me</HeaderTextMobile>
					</HeaderWrapperMobile>
					<WrapperMobile>
						<ImageContainerMobile>
							<Image className="profile-picture" src={me}></Image>
						</ImageContainerMobile>
						<TextMobile>
							Hello there my friend! I am a frontend developer who loves to create applications that will inspire the user. I am also a mentor and aspiring UX-designer.
						</TextMobile>
					</WrapperMobile>
				</ContainerMobile>
			)}
		</>
	);

};

export default AboutMe;

/*STYLING DESKTOP*/

const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Rubik&display=swap");
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Rubik", sans-serif;
	margin-top: 200px;
`;
const HeaderWrapper = styled.div`
 width 500px;
text-align: center;
`;
const HeaderText = styled.h1`
	font-size: 35px;
	letter-spacing: 4px;
  line-height: 50px;
	font-family: "Rubik", sans-serif;
`;

const Border = styled.hr`
  width: 200px;
  height: 0.5px;
  background-color: black;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 700px;
  padding: 50px;
`;

const Text = styled.div`
  letter-spacing: 2px;
  line-height: 30px;
  font-size: 14px;
  padding-right: 30px;
`;

const ImageContainer = styled.div`
  width: 700px;
`;


/*STYLING MOBILE*/

const ContainerMobile = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Rubik&display=swap");
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Rubik", sans-serif;
	width: 100%;
`;

const HeaderWrapperMobile = styled.div`
  max-width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
	padding: 20px;
`;

const HeaderTextMobile = styled.h1`
  max-width: 200px;
	text-align: center;
	 font-size: 30px;
`;

const BorderMobile = styled.hr`
  width: 200px;
  height: 0.5px;
  background-color: black;
`;

const WrapperMobile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
	flex-direction: column; 
  max-width: 500px;
  padding: 50px;
`;

const TextMobile = styled.div`
  letter-spacing: 2px;
  line-height: 30px;
  font-size: 14px;
	max-width: 600px;
`;

const ImageContainerMobile = styled.div`
margin-bottom: 10px;
`;

