import React from "react";
import Image from "next/image";
import me from "../assets/meblue.png";

const AboutMe = () => {

	return (
		<>
			<section className="flex justify-center items-center flex-col mt-0 lg:mt-0 my-20">
				<div className="header-container">
					<h1>About me</h1>
					<h2>What I like doing all day</h2>
				</div>
				<div className="w-[80%] md:w-[65%]  mt-10 flex justify-center flex-col items-center md:block">
					<div className="md:float-left w-[170px] pr-2 mb-2 md:mb-0"><Image src={me}></Image></div>
					<div className="md:text-justify font-Poppins font-semibold text-base tracking-wide leading-relaxed">Hello there my friend! I am a creative developer passionate about building digital experiences that nurture community, inclusivity and knowledge &#9829; I am a Technigo code bootcamping student with a background in economis and hold a MSc in international business and politics.<br /> <br />
						I started my developing jurney in the midst of the pandimic and have not looked back since. I enjoy supporting other females through holding coding workshops or mentoring. When I am not coding I enjoy running, lifting weights and bikram yoga. I like reading good novels and writing some prose. <br /> <br />
						Whether the web or outdoors I love exploring So do not hesitate to contact me if you have an idea you want to explore &#8595;</div>
				</div>
			</section>

		</>
	);

};

export default AboutMe;


