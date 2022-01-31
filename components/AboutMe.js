import React, { useEffect } from "react";
import Image from "next/image";
import me from "../assets/meblue.png";
import { Link, animateScroll as scroll } from "react-scroll";//Alternate for tag. In Nexjs we use link for ref 
import Aos from 'aos';
import 'aos/dist/aos.css';

const AboutMe = () => {

	useEffect(() => {
		Aos.init({ duration: 500 });
	}, []);

	return (
		<>
			<section className="flex justify-center items-center flex-col mt-10 lg:mt-20 lg:mb-40">
				<div className="header-container" data-aos="fade-up">
					<h1>About me</h1>
					<h2>What I like doing all day</h2>
				</div>
				<div data-aos="fade-up" className="max-w-[65%] mt-10 flex justify-center flex-col items-center md:block">
					<div className="md:float-left w-[170px] pr-2 mb-2 md:mb-0"><Image src={me}></Image></div>
					<div className="md:text-justify font-Poppins font-semibold text-base tracking-wide leading-relaxed">Hello there my friend! I am a creative developer passionate about building digital experiences that nurture community, inclusivity and knowledge &#9829; I am a Technigo code bootcamping student with a background in economis and have a MSc in international business and politics.<br /> <br />
						I started my developing journey in the midst of the pandimic and have not looked back since. I enjoy supporting other females through holding coding workshops or mentoring. When I am not coding I enjoy running, lifting weights and bikram yoga. I like reading good novels and writing some prose. <br /> <br />
						Whether the web or outdoors I love exploring So do not hesitate to contact me if you have an idea you want to develop into reality.</div>
				</div>
			</section>

		</>
	);

};

export default AboutMe;


