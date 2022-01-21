
/* import plant from "../assets/plant.png"
import Image from "next/image" */
const Header = () => {


	return (
		<>
			<header className="relative h-screen clip-path-slant-down-right flex justify-center items-center w-full">
				<div className="absolute top-40 h-2/5 flex justify-between flex-col p-2">
					<h1 className="font-Rubik lg:text-xl text-base leading-7 tracking-widest">Hi! My name is</h1>
					<div className="h-1/2 mt-40px">
						<h2 className="font-Rubik lg:text-7xl text-5xl leading-10 tracking-widest">Sara Carlstein</h2>
						<h2 className="font-Rubik lg:text-4xl text-3xl leading-10 tracking-widest lg:mt-8 mt-4">I like to build things for the web.</h2>
					</div>

					<button className="mt-10">see my mork</button>
				</div>
			</header>
			<section className="absolute lg:bottom-10 bottom-0 right-0 lg:right-6">
				{/* 	<h1 className="m-0 text-center w-60 lg:w-4/5"><Image src={plant} /></h1> */}
			</section>
		</>

	);
}

export default Header