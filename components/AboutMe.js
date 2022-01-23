import React from "react";
import Image from "next/image";
import me from "../assets/profile.png";

const AboutMe = () => {

	return (
		<>
			<section className="flex justify-center items-center flex-col mt-0 my-20">
				<h1>About me</h1>
				<div className="flex justify-center items-center w-2/3 flex-col lg:flex-row p-5">
					<div className="p-10 w-60 lg:w-full">
						<Image src={me}></Image>
					</div>
					<p>
						Hello there my friend! I am a frontend developer with a interest in
						both design and content creation. I aim to combine my code skills &
						passion for meaningful product & service ideas. To create
						user-friendly digital platforms that are innovative and creative.

					</p>
				</div>
			</section>
		</>
	);

};

export default AboutMe;


