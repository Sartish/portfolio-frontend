
import Image from "next/image";
import flight from "../assets/nzsize.png";
const HeaderDesktop = () => {
	return (
		<header className="flex justify-center items-center w-full h-screen flex-col">
			<div className="flex justify-center items-center flex-col lg:flex-row md:flex-col lg:mr-20 lg:ml-20 w-[90%]">
				<div className="flex justify-center items-center lg:w-[800px] xl:w-[900px] md:w-[500px] w-[400px] p-5 z-0 pb-5">
					<Image src={flight} />
				</div>
				<div className="flex justify-center items-center flex-col lg:min-w-fit z-10">
					<h1 className="text-center font-Lora xl:text-[100px] lg:text-[60px] md:text-[50px] text-[40px] tracking-wide lg:ml-[-200px] xl:ml[-100] md:ml-[0px] lg:mb-[40px] mb-[5px] lowercase">Sara Carlstein</h1>
					<h1 className="text-center font-Poppins lg:ml-[-50px] md:ml-[0px] leading-12 tracking-wide text-[20px] md:text-[30px] lg:text-[30px] uppercase">Building things on the web</h1>
				</div>
			</div>
			<h1 className="text-center font-Lora text-[12px] leading-12 tracking-wide md:text-[18px]">using my passion to help you pursue yours
				<h2 className="text-center uppercase font-Poppins">learn more</h2>
			</h1>
		</header>
	)

}

export default HeaderDesktop