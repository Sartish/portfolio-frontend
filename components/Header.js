
import mountain from "../assets/mountains.jpg"
import Image from "next/image"
const Header = () => {


	return (
		<>
			<header className="w-full h-screen flex flex-col lg:flex-row justify-center items-center p-5 lg:p-40">
				<div className="flex flex-col w-96 lg:w-full justify-between lg:justify-center items-center lg:items-start lg:mr-5 lg:mt-0 mt-10">
					<h1 className="font-Rubik lg:text-xl text-lg leading-7 tracking-widest mb-5 bg-yellow p-2">Hi! My name is</h1>
					<div className="flex clip-path-arrow-down lg:clip-path-arrow-right mt-10 mb-10 lg:mt-0 lg:mb-0 w-60 lg:w-full">
						<Image src={mountain} />
					</div>
				</div>
				<div className="flex lg:justify-around items-center flex-col mt-10 lg:w-full w-full">
					<h2 className="font-Rubik lg:text-6xl text-2xl leading-10 tracking-widest p-2 mt-0 lg:mt-20 lg:p-3 lg:w-full lg:text-center">Sara Carlstein</h2>
					<h2 className="font-Rubik lg:text-6xl text-2xl leading-10 tracking-widest lg:p-3 lg:w-full lg:text-center">&</h2>
					<h2 className="font-Rubik lg:text-4xl text-2xl leading-10 tracking-widest text-center lg:p-3 lg:w-full">I like building things on the web</h2>
				</div>
			</header>
		</>

	);
}

export default Header