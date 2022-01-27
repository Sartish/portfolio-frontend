import { Transition } from "@headlessui/react" // for smooth transition between tabs
import { Link, animateScroll as scroll } from "react-scroll";//Alternate for tag. In Nexjs we use link for ref
import * as Scroll from 'react-scroll';
import React, { useState } from "react";



const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div>
			<nav className="shadow-sm fixed lg:static w-full z-10 lg:z-0">
				<div className="w-full">
					<div className="flex items-center h-20 w-full">
						<div className="flex items-center  mx-10  justify-between w-full">
							<div className="flex justify-center items-center flex-shrink-0 ">
								<Link
									to="home"
									spy={true}
									smooth={true}
									duration={500}
									offset={-80}
									activeclassname="About"
									className="hover:opacity-50"
								>
									<h1 className="font-Lora text-[30px] cursor-pointer p-[4px] lowercase">
										S.<span className="">C</span>
									</h1>
								</Link>
							</div>
							<div className="hidden lg:block">
								<div className="cursor-pointer text-sm ml-10 flex items-baseline space-x-4 font-Poppins font-semibold uppercase leading-12 tracking-wide">
									<Link
										to="about"
										spy={true}
										smooth={true}
										duration={500}
										offset={-80}
										activeclassname="About"
										className="hover:opacity-50"
									>
										About
									</Link>
									<Link
										to="skills"
										spy={true}
										smooth={true}
										duration={500}
										offset={-80}
										className="hover:opacity-50"
									>
										Skills
									</Link>
									<Link
										activeclassname="About"
										to="third-desktop"
										spy={true}
										smooth={true}
										duration={500}
										offset={-80}
										className="hover:opacity-50"
									>
										Projects
									</Link>
									<Link
										activeclassname="About"
										to="writings"
										spy={true}
										smooth={true}
										duration={500}
										offset={-80}
										className="hover:opacity-50"
									>
										Writings
									</Link>
									<Link
										activeclassname="About"
										to="experience"
										spy={true}
										smooth={true}
										duration={500}
										offset={-80}
										className="hover:opacity-50"
									>
										Experience
									</Link>

								</div>
							</div>
						</div>


						<div className="mr-10 flex lg:hidden ">
							<button
								onClick={() => setIsOpen(!isOpen)}
								type="button"
								className="inline-flex items-center justify-center p-2 rounded-md text-black  hover:bg-opacity-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-white"
								aria-controls="mobile-menu"
								aria-expanded="false"
							>
								<span className="sr-only">Open main menu</span>
								{!isOpen ? (
									<svg
										className="block h-8 w-8"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								) : (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								)}
							</button>
						</div>
					</div>
				</div>

				<Transition
					show={isOpen}
					enter="transition ease-out duration-100 transform"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="transition ease-in duration-75 transform"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					{(ref) => (
						<div className="lg:hidden" id="mobile-menu">
							<div
								ref={ref}
								className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3"
							>
								<Link
									href="/services"
									activeclassname="services"
									to="home"
									spy={true} smooth={true}
									duration={500}
									offset={-90}
									className="hover:opacity-50 font-Poppins  leading-12 tracking-wide font-bold uppercase cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base"
									onClick={() => setIsOpen(!isOpen)}
								>
									Home
								</Link>
								<Link
									href="/home"
									activeclassname="home"
									to="about"
									spy={true} smooth={true}
									duration={500}
									offset={-100}
									className="hover:opacity-50 font-Poppins font-bold leading-12 tracking-wide uppercase cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base"
									onClick={() => setIsOpen(!isOpen)}
								>
									About
								</Link>
								<Link
									href="/about"
									activeclassname="about"
									to="skills"
									spy={true} smooth={true}
									duration={500}
									offset={-120}
									className="hover:opacity-50 font-Poppins font-bold leading-12 tracking-wide uppercase cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base"
									onClick={() => setIsOpen(!isOpen)}
								>
									Skills
								</Link>
								<Link
									href="/work"
									activeclassname="work"
									to="third-mobile"
									spy={true} smooth={true}
									duration={500}
									offset={-100}
									className="hover:opacity-50 font-Poppins font-bold  uppercase cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base"
									onClick={() => setIsOpen(!isOpen)}
								>
									Projects
								</Link>
								<Link
									href="/services"
									activeclassname="services"
									to="writings"
									spy={true} smooth={true}
									duration={500}
									offset={-90}
									className="hover:opacity-50 font-Poppins leading-12 tracking-wide font-bold uppercase cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base"
									onClick={() => setIsOpen(!isOpen)}
								>
									Writings
								</Link>

								<Link
									href="/services"
									activeclassname="services"
									to="experience"
									spy={true} smooth={true}
									duration={500}
									offset={-90}
									className="hover:opacity-50 font-Poppins  leading-12 tracking-wide font-bold uppercase cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base"
									onClick={() => setIsOpen(!isOpen)}
								>
									Experience
								</Link>
							</div>
						</div>
					)}
				</Transition>
			</nav>
		</div>
	);
}

export default NavBar