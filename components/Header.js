
import mountain from "../assets/mountains.jpg"
import Image from "next/image"
const Header = () => {


	return (
		<div className="w-screen flex justify-center items-center">
			<header className="w-full h-[500px] md:h-[500px] lg:h-1/2 flex flex-col lg:flex-row justify-between lg:justify-center items-center lg:items-start mt-[160px] mb-[50px] lg:mb-40 lg:pl-[60px] lg:pr-[45px]">
				<div className="clip-path-arrow-down lg:clip-path-arrow-right w-[400px] lg:w-[500px]">
					<Image src={mountain} />
				</div>
				<div className="w-[500px] md:w-[600px] lg:w-[600px] flex justify-center items-center flex-col mt-20 lg:mt-5">
					{/* 	<h1 className="font-Rubik lg:text-xl text-lg leading-7 tracking-widest mb-5 bg-yellow p-2">Hi! I am</h1> */}
					<h2 className="font-Rubik lg:text-6xl md:text-6xl text-4xl leading-normal p-4 text-center"><span className="lg:text-4xl text-2xl">Iam </span>Sara Carlstein</h2>
					<h2 className="font-Rubik lg:text-6xl md:text-5xl text-2xl leading-normal p-4text-center">&</h2>
					<h2 className="font-Rubik lg:text-4xl md:text-3xl text-3xl leading-normal p-4 text-center">I like <span className="bg-yellow p-2">building</span> things for the <span>web</span></h2>
				</div>
			</header>
		</div>

	);
}

export default Header