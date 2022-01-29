import React, { useEffect } from "react";
import Image from "next/image"
import articleonepic from "../assets/newsizearticle.png"
import articletwopic from "../assets/newsizetwo.png"
import articlethreepic from "../assets/newsizethree.png"
import Aos from 'aos';
import 'aos/dist/aos.css';

const WritingCard = () => {

	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);


	return (
		<div className="flex justify-center items-center flex-col mt-20 lg:mt-40 lg:mb-20">
			<div data-aos="fade-up" className="header-container">
				<h1>Writings</h1>
				<h2>Some of my writings</h2>
			</div>
			<div data-aos="fade-up" className="md:w-[70%] w-[90%] pb-20 pt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5 items-center justify-items-center">
				<div className="rounded overflow-hidden shadow-lg max-w-[80%]">
					<div className="max-w-screen-md">
						<Image src={articleonepic} alt="Mountain" />
					</div>
					<div className="px-6 py-4">
						<a href="https://carlstein-sara.medium.com/my-journey-into-becoming-a-frontend-developer-11601455664b">
							<h1 className="font-bold text-xl mb-2">My Frontend journey</h1>
							<p className=" font-Poppins font-semibold text-base tracking-widest leading-relaxed">
								In March 2020 around the first corona wave in Sweden. I started to feel the urgent need for a change. The longing that can be felt in both the mind, body, and soul.
								<span className="text-font-bold underline text-lg hover:opacity-50 cursor:pointer">&#62;&#62;&#62;</span>
							</p>
						</a>
					</div>
					<div className="px-6 pt-4 pb-2">
						<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#bootcamp</span>
						<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#frontend</span>
						<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#journey</span>
						<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#developer</span>
						<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#6monthofcode</span>
					</div>
				</div>




				<div className="rounded overflow-hidden shadow-lg max-w-[80%]">
					<div className="w-full">
						<Image src={articletwopic} alt="Mountain" />
					</div>
					<div className="px-6 py-4">
						<a href="https://carlstein-sara.medium.com/to-learn-coding-is-about-not-giving-up-e02769aa8dd7">
							<h1 className="font-bold text-xl mb-2">Getting into code life</h1>
							<p className=" font-Poppins font-semibold text-base tracking-widest leading-relaxed">
								I am now more than halfway through Technigo’s 6-month frontend Bootcamp! I feel excited, happy, thrilled and a bit worried at the same time.
								<span className="text-font-bold underline text-lg hover:opacity-50 cursor:pointer">&#62;&#62;&#62;</span>
							</p>
						</a>
					</div>
					<div className="px-6 pt-4 pb-2">
						<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#support</span>
						<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#network</span>
						<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#react</span>
						<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#bootcamp</span>
						<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#redux</span>
						<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#juniordev</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default WritingCard

