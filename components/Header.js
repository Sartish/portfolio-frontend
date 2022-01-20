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
				<HeaderWrapperDesktop className="bg-orange-300 flex justify-center items-center h-screen w-full">
					<WrapperAllHeadersDesktop className="flex flex-col h-1/2 justify-around items-stretch">
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
						<Button>See my work </Button>
					</WrapperAllHeadersDesktop>
				</HeaderWrapperDesktop>
			)}

			{isTabletOrMobile && (
				<HeaderWrapperMobile className="bg-orange-300 flex justify-center items-center h-screen w-full">
					<WrapperAllHeaders className="flex flex-col h-1/2 justify-around items-stretch">
						<FirstHeaderMobile>
							<span data-aos="fade-left">Hi my name is</span>
						</FirstHeaderMobile>
						<SecondHeaderMobile data-aos="fade-up">
							Sara Carlstein.
						</SecondHeaderMobile>
						<ThirdHeaderMobile data-aos="fade-up">
							I like building things for the web.
						</ThirdHeaderMobile>
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
`;

const WrapperAllHeaders = styled.div`
 display: flex; 
 `;

const FirstHeaderMobile = styled.h1`
  margin: 0;
  font-size: 14px;
  font-family: "Rubik", sans-serif;
  letter-spacing: 4px;
  line-height: 20px;
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
		border: 2px solid black;
`;

const WrapperAllHeadersDesktop = styled.div`
border: 2px solid black;
`;


const FirstHeaderDesktop = styled.h1`
  font-size: 18px;
  font-family: "Rubik", sans-serif;
  letter-spacing: 4px;
  line-height: 20px;
`;

const SecondHeaderDesktop = styled.h2`
  font-size: 80px;
  font-family: "Rubik", sans-serif;
  letter-spacing: 4px;
  line-height: 70px;
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
  left: calc(50% - 200px);
  background-color: #fdf5df;
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
