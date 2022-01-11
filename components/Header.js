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

	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
	const isDesktopOrLaptop = useMediaQuery({
		query: "(min-width: 1224px)",
	});


	return (

		<HeaderContainer>
			{isDesktopOrLaptop &&
				<HeaderWrapperDesktop>
					<FirstHeaderDesktop>
						<span data-aos="fade-left">Hi </span>{" "}
						<span data-aos="fade-left">my name is</span>
					</FirstHeaderDesktop>
					<SecondHeaderDesktop data-aos="fade-up">Sara Carlstein.</SecondHeaderDesktop>
					<ThirdHeaderDesktop data-aos="fade-up">
						I like building things for the web.
					</ThirdHeaderDesktop>
					<ParagraphDesktop data-aos="fade-left">
						I am a career changer, that has a background in economic and politics
						& now turned into a developer.
					</ParagraphDesktop>
					<ButtonDesktop>
						<div className="svg-wrapper">
							<svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
								<rect className="shape" height="60" width="320" />
							</svg>
							<div className="text">See my work</div>
						</div>
					</ButtonDesktop>
				</HeaderWrapperDesktop>

			}


			{isTabletOrMobile &&
				<HeaderWrapperMobile>
					<FirstHeaderMobile>
						<span data-aos="fade-left">Hi </span>{" "}
						<span data-aos="fade-left">my name is</span>
					</FirstHeaderMobile>
					<SecondHeaderMobile data-aos="fade-up">Sara Carlstein.</SecondHeaderMobile>
					<ThirdHeaderMobile data-aos="fade-up">
						I like building things for the web.
					</ThirdHeaderMobile>
					<ParagraphMobile data-aos="fade-left">
						I am a career changer, that has a background in economic and politics
						& now turned into a developer.
					</ParagraphMobile>
					<div className="svg-wrapper">
						<svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
							<rect className="shape" height="60" width="320" />
						</svg>
						<div className="text">See my work</div>
					</div>
				</HeaderWrapperMobile>
			}
		</HeaderContainer>
	);
};

export default Header;




/*DEFAULT*/

const HeaderContainer = styled.div`
	@import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');
  display: flex;
  height: 800px;
	font-family: 'Rubik', sans-serif;
	width: 100%;
	justify-content: center;
	align-items: center;
`;


/*MOBILE STYLING GOES HERE*/

const HeaderWrapperMobile = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  border: 2px solid black;
	font-family: 'Rubik', sans-serif;
`
const FirstHeaderMobile = styled.h1`
  margin: 0;
  font-size: 18px;
  font-family: 'Rubik', sans-serif;
  letter-spacing: 4px;
  line-height: 20px;
  margin-bottom: 5px;
	display: flex;
`;

const SecondHeaderMobile = styled.h2`
  margin: 0;
  font-size: 100px;
  text-align: left;
  font-family: 'Rubik', sans-serif;
  letter-spacing: 4px;
  line-height: 70px;
  margin-bottom: 5px;
`;

const ThirdHeaderMobile = styled.h3`
  margin: 0;
  font-size: 50px;
  letter-spacing: 4px;
  line-height: 50px;
	font-family: 'Rubik', sans-serif;
`;

const ParagraphMobile = styled.p`
  font-size: 12px;
  font-family: "Rubik", sans-serif;
  letter-spacing: 4px;
  line-height: 20px;
  margin-bottom: 5px;
`;


/*Desktop Styling*/
const FirstHeaderDesktop = styled.h1`
  margin: 0;
  font-size: 18px;
  font-family: 'Rubik', sans-serif;
  letter-spacing: 4px;
  line-height: 20px;
  margin-bottom: 5px;
	position: absolute; 
	top: 10%;
	left: 10%;
`;

const SecondHeaderDesktop = styled.h2`
  margin: 0;
  font-size: 100px;
  text-align: left;
  font-family: 'Rubik', sans-serif;
  letter-spacing: 4px;
  line-height: 70px;
  margin-bottom: 5px;
	position: absolute;
	top: 25%;
	left: 15%;
`;

const ThirdHeaderDesktop = styled.h3`
  margin: 0;
  font-size: 50px;
  letter-spacing: 4px;
  line-height: 50px;
	font-family: 'Rubik', sans-serif;
	position: absolute;
	top: 40%;
	left: 15%;
`;

const ParagraphDesktop = styled.p`
  font-size: 12px;
  font-family: "Rubik", sans-serif;
  letter-spacing: 4px;
  line-height: 20px;
  margin-bottom: 5px;
	position: absolute;
	top: 50%;
	left: 15%;
`;

const ButtonDesktop = styled.p`
	position: absolute;
	 top: 55%;
  left: calc(50% - 90px);
`;


const HeaderWrapperDesktop = styled.div`
  margin: 0;
  border: 2px solid black;
	font-family: 'Rubik', sans-serif;
`;

/* const TopMeadiaLinks = styled.div`
	width: 40px;
	height: 40px;
	padding: 15px;
	justify-self: flex-start;
	position: absolute;
	top: 40%;
	left: 2%;
`; */


