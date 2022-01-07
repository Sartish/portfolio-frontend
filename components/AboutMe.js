import TextTransition, { presets } from "react-text-transition";
import React from 'react';

const Header = () => {
	const TEXTS = [
		"Forest",
		"Building",
		"Tree",
		"Color"
	];

	const [index, setIndex] = React.useState(0);

	React.useEffect(() => {
		const intervalId = setInterval(() =>
			setIndex(index => index + 1),
			1000 // every 3 seconds
		);
		return () => clearTimeout(intervalId);
	}, []);


	return (
		<div className="header-container">
			<div className="header">
				<TextTransition
					text={TEXTS[index % TEXTS.length]}
					springConfig={presets.wobbly}
				/>
				<h1>Hi, my name is</h1>
				<h2>Sara Carlstein.</h2>
				<h3>I like building things for the web.</h3>
				<p>I am a career changer, that has a background in economic and politics & now turned into a developer.</p>
				<div>social media icon</div>
				<div className="button">See my work</div>
			</div>
		</div>
	)
}

export default Header