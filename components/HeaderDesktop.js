
import Image from "next/image";
import flight from "../assets/compressednz.png";
const HeaderDesktop = () => {
	return (
		<header className="w-full h-[640px] lg:h-[85%] md:h-[680px] flex justify-center items-center flex-col mb-20;">
			<div className="flex justify-center items-center flex-col lg:flex-row md:flex-col lg:mr-20 lg:ml-20 md:ml-20 md:mr-20 w-[90%]">
				<div className="flex justify-center items-center lg:w-[700px] md:w-[600px] w-[400px] z-0 p-5 lg:pt-10">
					<Image src={flight} />
				</div>
				<div className="flex justify-center items-center flex-col lg:min-w-fit z-10">
					<h1 className="text-center font-Lora lg:text-[70px] md:text-[60px] text-[40px] tracking-wide lg:ml-[-200px] md:ml-[0px] lg:mb-[40px] mb-[5px] lowercase">Sara Carlstein</h1>
					<h1 className="text-center font-Poppins lg:ml-[-40px] md:ml-[0px] leading-12 tracking-wide text-[20px] md:text-[25px] lg:text-[30px] uppercase">Building things on the web</h1>
				</div>
			</div>
			<h1 className="text-center font-Lora text-[14px] md:text-[18px] mt-5 lg:mt-[20px] lg:mb-[150px]">using my passion to help you pursue yours
				<h2 className="text-center uppercase font-Poppins font-semibold text-sm">learn more</h2>
				<a className="ca3-scroll-down-link ca3-scroll-down-arrow" data-ca3_iconfont="ETmodules" data-ca3_icon=""></a>
			</h1>
		</header>
	)

}

export default HeaderDesktop