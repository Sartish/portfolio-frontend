
import Image from "next/image";
import flight from "../assets/compressednz.png";
const HeaderDesktop = () => {
	return (
		<header className="p-5 w-full h-screen lg:h-screen md:h-[680px] flex justify-evenly lg:justify-start items-center flex-col mb-[25px] lg:[mb-0px]">
			<div className="flex justify-center items-center flex-col lg:flex-row md:flex-col lg:mr-40 lg:ml-40 md:ml-20 md:mr-20 w-[90%]">
				<div className="p-5 flex justify-center items-center lg:w-[700px] md:w-[550px] w-[400px] z-0 lg:pt-10">
					<Image src={flight} />
				</div>
				<div className="flex justify-center items-center flex-col lg:min-w-fit z-10">
					<h1 className="text-center font-Lora lg:text-[70px] md:text-[60px] text-[40px] tracking-wide lg:ml-[-120px] md:ml-[0px] lg:mb-[40px] mb-[5px] md:mb-[20px] lowercase">Sara Carlstein</h1>
					<h1 className="text-center font-Poppins lg:ml-[-40px] md:ml-[0px] leading-12 tracking-wide text-[20px] md:text-[20px] lg:text-[25px] uppercase">Building things on the web</h1>
				</div>
			</div>
			<h1 className="text-center font-Lora text-[12px] md:text-[16px] mt-[-40px] lg:pt-[60px] md:mb-[30px]">using my passion to help you pursue yours
				<h2 className="text-center uppercase font-Poppins font-semibold text-sm">learn more</h2>
				<a className="ca3-scroll-down-link ca3-scroll-down-arrow" data-ca3_iconfont="ETmodules" data-ca3_icon=""></a>
			</h1>
		</header>
	)

}

export default HeaderDesktop