
import Image from "next/image";
import flight from "../assets/nzsize.png";
const HeaderDesktop = () => {
	return (
		<header className="flex justify-center items-center w-full lg:h-screen h-[500px]">
			<div className="flex justify-center items-center flex-col lg:flex-row md:flex-col mr-20 ml-20 w-[90%] pt-10 md:pt-20 lg:pt-0">
				<div className="flex justify-center items-center lg:w-[800px] xl:w-[900px] md:w-[500px] w-[300px] z-0 pb-5">
					<Image src={flight} />
				</div>
				<div className="flex justify-center items-center flex-col lg:min-w-fit z-10">
					<h1 className="text-center font-Lora xl:text-[100px] lg:text-[60px] md:text-[50px] text-[40px] tracking-wide lg:ml-[-200px] xl:ml[-100] md:ml-[0px] lg:mb-[40px] mb-[5px]">Sara Carlstein</h1>
					<h1 className="text-center font-Poppins lg:ml-[-50px] md:ml-[0px] leading-12 tracking-wide text-[20px] md:text-[30px] lg:text-[30px]">Building things on the web</h1>
				</div>
			</div>
		</header>
	)

}

export default HeaderDesktop