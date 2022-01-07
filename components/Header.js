import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import useDarkMode from 'use-dark-mode';

const Header = () => {
	useEffect(() => {
		Aos.init({ duration: 3000 });
	}, []);

	return (
		<div className="header-container">
			<div className="header">
				<h1><span data-aos="fade-left">Hi </span> <span data-aos="fade-left">my name is</span></h1>
				<h2 data-aos="fade-up">Sara Carlstein.</h2>
				<h3 data-aos="fade-up">I like building things for the web.</h3>
				<p data-aos="fade-left">I am a career changer, that has a background in economic and politics & now turned into a developer.</p>
				<div>social media icon</div>
				<div className="button">See my work</div>
			</div>
		</div>
	)
}

export default Header