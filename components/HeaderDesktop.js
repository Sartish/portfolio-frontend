
import Image from "next/image";
import flight from "../assets/nznewsize.png";
const HeaderDesktop = () => {
	return (
		<header className="w-full h-screen lg:h-[600px] xl:h-[700px] md:h-[800px] flex justify-center items-center flex-col ">
			<div className="flex justify-center items-center flex-col lg:flex-row md:flex-col lg:mr-20 lg:ml-20 md:ml-20 md:mr-20  pt-[0px] md:pt-[0px] lg:pt-[0px] w-[90%]">
				<div className="flex justify-center items-center lg:w-[800px] md:w-[600px] w-[400px] p-5 z-0 pb-5">
					<Image src={flight} />
				</div>
				<div className="flex justify-center items-center flex-col lg:min-w-fit z-10 p-5">
					<h1 className="text-center font-Lora lg:text-[70px] md:text-[60px] text-[40px] tracking-wide lg:ml-[-200px] md:ml-[0px] lg:mb-[40px] mb-[20px] lowercase">Sara Carlstein</h1>
					<h1 className="text-center font-Poppins lg:ml-[-40px] md:ml-[0px] leading-12 tracking-wide text-[20px] md:text-[25px] lg:text-[30px] uppercase">Building things on the web</h1>
				</div>
			</div>
			<h1 className="text-center font-Lora text-[14px] md:text-[18px] mt-10 lg:mt-[40px]">using my passion to help you pursue yours
				<h2 className="text-center uppercase font-Poppins font-semibold text-sm">learn more</h2>
				<a className="ca3-scroll-down-link ca3-scroll-down-arrow" data-ca3_iconfont="ETmodules" data-ca3_icon=""></a>
			</h1>
		</header>
	)

}

export default HeaderDesktop