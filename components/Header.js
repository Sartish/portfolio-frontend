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
						</SecondHeaderMobile>
						<ThirdHeaderMobile data-aos="fade-up">
							I like building things for the web.
						</ThirdHeaderMobile>
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
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  height: 600px;
  background-color: #fdf5df;
  background-size: cover;
  background-position: top;
  clip-path: polygon(0 0, 49% 0, 100% 0, 100% 100%, 100% 66%, 0 100%, 0 48%);
`;

const WrapperAllHeaders = styled.div`
 border: black solid 2px;
 display: flex; 
 justify-content: center;
 align-items: flex-start; 
 flex-direction: column; 
 max-width: 500px;
 margin-top: -20px;
`;
const FirstHeaderMobile = styled.h1`
  margin: 0;
  font-size: 18px;
  font-family: "Rubik", sans-serif;
  letter-spacing: 4px;
  line-height: 20px;
  margin-bottom: 50px;
  display: flex;
`;

const SecondHeaderMobile = styled.h2`
  margin: 0;
  font-size: 60px;
  text-align: left;
  font-family: "Rubik", sans-serif;
  letter-spacing: 4px;
  line-height: 70px;
  margin-bottom: 15px;
`;

const ThirdHeaderMobile = styled.h3`
  margin-bottom: 20px;
  font-size: 40px;
  letter-spacing: 4px;
  line-height: 50px;
  font-family: "Rubik", sans-serif;
  margin-bottom: 10px;
`;

const ParagraphMobile = styled.p`
  font-size: 12px;
  font-family: "Rubik", sans-serif;
  letter-spacing: 4px;
  line-height: 20px;
  margin-bottom: 5px;
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
  height: 600px;
  background-color: #fdf5df;
  background-size: cover;
  background-position: top;
  clip-path: polygon(0 0, 49% 0, 100% 0, 100% 100%, 100% 66%, 0 100%, 0 48%);
`;

const FirstHeaderDesktop = styled.h1`
  font-size: 18px;
  font-family: "Rubik", sans-serif;
  letter-spacing: 4px;
  line-height: 20px;
  margin-bottom: 15px;
  position: absolute;
  top: 10%;
  left: 10%;
`;

const SecondHeaderDesktop = styled.h2`
  font-size: 80px;
  text-align: left;
  font-family: "Rubik", sans-serif;
  letter-spacing: 4px;
  line-height: 70px;
  position: absolute;
  top: 20%;
  left: 10%;
`;

const ThirdHeaderDesktop = styled.h3`
  margin: 0;
  font-size: 50px;
  letter-spacing: 4px;
  line-height: 50px;
  font-family: "Rubik", sans-serif;
  position: absolute;
  top: 35%;
  left: 10%;
`;

const ParagraphDesktop = styled.p`
  font-size: 14px;
  font-family: "Rubik", sans-serif;
  letter-spacing: 4px;
  line-height: 20px;
  margin-bottom: 5px;
  position: absolute;
  top: 50%;
  left: 10%;
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
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
