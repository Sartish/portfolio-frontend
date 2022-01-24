
import mountain from "../assets/mountains.jpg"
import Image from "next/image"
const Header = () => {


	return (
		<>
			<header className="w-full h-screen flex flex-col lg:flex-row md:flex-row justify-center items-center p-5 lg:p-40 pt-60">
				<div className="flex flex-col w-96 lg:w-full md:w-full justify-between lg:justify-center md:justify-center items-center lg:items-start md:items-start lg:mr-5 md:mr-5 lg:mt-10 md:mt-10 mt-10">
					<div className="flex clip-path-arrow-down md:clip-path-arrow-right lg:clip-path-arrow-right mt-10 mb-10 lg:mt-0 md:mt-0 lg:mb-0 md:mb-0 w-96 lg:w-full md:w-full">
						<Image src={mountain} />
					</div>
				</div>
				<div className="flex lg:justify-around md:justify-around items-center flex-col mt-10 lg:w-full md:w-full w-full">
					{/* 	<h1 className="font-Rubik lg:text-xl text-lg leading-7 tracking-widest mb-5 bg-yellow p-2">Hi! I am</h1> */}
					<h2 className="font-Rubik lg:text-6xl md:text-6xl text-4xl leading-normal mt-0 lg:w-full md:w-full lg:text-center md:text-center text-center"><span className="lg:text-4xl text-2xl">I'am </span>Sara Carlstein</h2>
					<h2 className="font-Rubik lg:text-6xl md:text-5xl text-2xl leading-normal lg:p-2 p-3 lg:w-full md:w-full text-center">&</h2>
					<h2 className="font-Rubik lg:text-4xl md:text-3xl text-2xl lg:leading-loose md:leading-normal text-center lg:w-full md:w-full">I like <span className="bg-yellow p-2">building</span> things for the <span>web</span></h2>
				</div>
			</header>
		</>

	);
}

export default Header