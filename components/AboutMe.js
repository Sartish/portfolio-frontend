import React from "react";
import Image from "next/image";
import me from "../assets/profile.png";

const AboutMe = () => {

	return (
		<>
			<section className="flex justify-center items-center flex-col mt-40 lg:mt-10 my-20">
				<div className="header-container">
					<h1>About me</h1>
					<h2>What I like doing all day</h2>
				</div>
				<div className="flex justify-center items-center w-2/3 flex-col lg:flex-row">
					<div className="w-60 lg:w-full photo">
						<Image className="photo" src={me}></Image>
					</div>
					<p>
						Hello there my friend! I am a frontend developer with a interest in
						both design and content creation. I aim to combine my code skills &
						passion for meaningful product & service ideas. To create
						user-friendly digital platforms that are innovative and creative.
						<p>What I also like: (animation)</p>
					</p>
				</div>
			</section>
		</>
	);

};

export default AboutMe;


