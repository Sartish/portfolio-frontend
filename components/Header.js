import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
/* import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import instagram from "../assets/instagram.svg";
import Image from "next/image"; */
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
/* import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' */

const Header = () => {
	useEffect(() => {
		Aos.init({ duration: 3000 });
	}, []);

	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1023px)" });
	const isDesktopOrLaptop = useMediaQuery({
		query: "(min-width:  1024px)",
	});

	return (
		<>
			{isDesktopOrLaptop && (
				<HeaderWrapperDesktop>
					<WrapperAllHeadersDesktop>
						<FirstHeaderDesktop>
							<span data-aos="fade-left">Hi </span>{" "}
							<span data-aos="fade-left">my name is</span>
						</FirstHeaderDesktop>
						<SecondHeaderDesktop data-aos="fade-up">
							Sara Carlstein.
						</SecondHeaderDesktop>
						<ThirdHeaderDesktop data-aos="fade-up">
							I like building things for the web.
						</ThirdHeaderDesktop>
						{/* <ParagraphDesktop data-aos="fade-left">
						I am a career changer, that has a background in economic and politics
						& now turned into a developer.
					</ParagraphDesktop> */}
						<Button>See my work </Button>
					</WrapperAllHeadersDesktop>
				</HeaderWrapperDesktop>
			)}

			{isTabletOrMobile && (
				<HeaderWrapperMobile>
					<WrapperAllHeaders>
						<FirstHeaderMobile>
							<span data-aos="fade-left">Hi my name is</span>
						</FirstHeaderMobile>
						<SecondHeaderMobile data-aos="fade-up">
							Sara Carlstein.
							<ThirdHeaderMobile data-aos="fade-up">
								I like building things for the web.
							</ThirdHeaderMobile>
						</SecondHeaderMobile>

						{/* 						<ParagraphMobile data-aos="fade-left">
							I am a career changer, that has a background in economic and
							politics & now turned into a developer.
						</ParagraphMobile> */}
						<ButtonMobile>See my work </ButtonMobile>
					</WrapperAllHeaders>
				</HeaderWrapperMobile>
			)}
		</>
	);
};

export default Header;

/*MOBILE STYLING GOES HERE*/

const HeaderWrapperMobile = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Rubik&display=swap");
  margin: 0;
  font-family: "Rubik", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 800px;
  background-color: #fdf5df;
	padding: 50px;
	width: 100%;
`;

const WrapperAllHeaders = styled.div`
 display: flex; 
 justify-content: center;
 align-items: flex-start; 
 flex-direction: column;
 `;

const FirstHeaderMobile = styled.h1`
  margin: 0;
  font-size: 14px;
  font-family: "Rubik", sans-serif;
  letter-spacing: 4px;
  line-height: 20px;
  margin-bottom: 20px;
  display: flex;
	margin-top: -150px;
	min-width: 300px;
`;

const SecondHeaderMobile = styled.h2`
  margin: 0;
  font-size: 35px;
  font-family: "Rubik", sans-serif;
  letter-spacing: 4px;
  line-height: 70px;
  margin-bottom: 15px;
	min-width: 300px
`;

const ThirdHeaderMobile = styled.h3`
  margin-bottom: 20px;
  font-size: 28px;
  letter-spacing: 4px;
  line-height: 50px;
  font-family: "Rubik", sans-serif;
  margin-bottom: 50px;
	min-width: 300px
`;


const ButtonMobile = styled.button`
  left: calc(50% - 200px);
  background-color: #fdf5df; /* Green */
  border: 2px solid black;
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  width: 200px;
  font-size: 14px;
  font-family: "Rubik", sans-serif;
  letter-spacing: 4px;
  line-height: 20px;
`;

/*Desktop Styling*/

const HeaderWrapperDesktop = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Rubik&display=swap");
  margin: 0;
  font-family: "Rubik", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 700px;
	border: 2px solid black;
  background-color: #fdf5df;
`;

const WrapperAllHeadersDesktop = styled.div`
display:flex;
flex-direction: column; 
height: 350px;
widht: 95%;
`;


const FirstHeaderDesktop = styled.h1`
  font-size: 18px;
  font-family: "Rubik", sans-serif;
  letter-spacing: 4px;
  line-height: 20px;
  margin-bottom: 40px;
`;

const SecondHeaderDesktop = styled.h2`
  font-size: 80px;
  text-align: left;
  font-family: "Rubik", sans-serif;
  letter-spacing: 4px;
  line-height: 70px;
	margin-bottom: 35px;
`;

const ThirdHeaderDesktop = styled.h3`
  margin: 0;
  font-size: 50px;
  letter-spacing: 4px;
  line-height: 50px;
  font-family: "Rubik", sans-serif;
`;

const ParagraphDesktop = styled.p`
  font-size: 14px;
  font-family: "Rubik", sans-serif;
  letter-spacing: 4px;
  line-height: 20px;
  margin-bottom: 5px;
  position: absolute;
  top: 55%;
  left: 10%;
`;

const Button = styled.button`
  position: absolute;
  top: 60%;
  left: calc(50% - 200px);
  background-color: #fdf5df; /* Green */
  border: 2px solid black;
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  width: 200px;
  font-size: 14px;
  font-family: "Rubik", sans-serif;
  letter-spacing: 4px;
  line-height: 20px;
`;
