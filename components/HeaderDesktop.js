import React, { useEffect } from "react";
import Image from "next/image";
import flight from "../assets/coversmall.png";
import { Link, animateScroll as scroll } from "react-scroll";//Alternate for tag. In Nexjs we use link for ref
import * as Scroll from 'react-scroll';

const HeaderDesktop = () => {

	return (
		<header className="w-full h-screen lg:screen flex justify-evenly lg:justify-start items-center flex-col lg:[mb-0px]">
			<div className="flex justify-center items-center flex-col lg:flex-row md:flex-col w-[90%]">
				<div className="pl-10 pr-10 lg:p-0 flex justify-center items-center lg:w-[780px] md:w-[600px] w-[400px] z-0 lg:pt-10">
					<Image src={flight} alt="picture for header" />
				</div>
				<div className="flex justify-center items-center flex-col lg:min-w-fit z-10">
					<h1 className="text-center font-Lora lg:text-[90px] md:text-[60px] text-[40px] tracking-wide lg:ml-[-120px] md:ml-[0px] lg:mb-[40px] mb-[5px] md:mb-[20px] lowercase">Sara Carlstein</h1>
					<h1 className="text-center font-Poppins lg:ml-[-40px] md:ml-[0px] leading-12 tracking-wide text-[20px] md:text-[20px] lg:text-[25px] uppercase">Building things on the web</h1>
				</div>
			</div>
			<h1 className="text-center font-Lora text-[12px] md:text-[18px] mt-[-80px] lg:pt-[100px] md:mb-[30px]">using my passion to help you pursue yours
				<h2 className="text-center uppercase font-Poppins font-semibold text-sm">learn more</h2>
				<Link
					to="third-desktop"
					spy={true}
					smooth={true}
					duration={500}
					offset={-200}
					activeclassname="About"
					className="hidden lg:block hover:opacity-50">
					<a className="ca3-scroll-down-link ca3-scroll-down-arrow" data-ca3_iconfont="ETmodules" data-ca3_icon=""></a>
				</Link>
				<Link
					to="third-mobile"
					spy={true}
					smooth={true}
					duration={500}
					offset={-20}
					activeclassname="About"
					className="block lg:hidden hover:opacity-50">
					<a className="ca3-scroll-down-link ca3-scroll-down-arrow" data-ca3_iconfont="ETmodules" data-ca3_icon=""></a>
				</Link>
			</h1>
		</header>
	)

}

export default HeaderDesktop