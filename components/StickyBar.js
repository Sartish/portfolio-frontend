import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github-side.svg";
import codepen from "../assets/codepen.svg";
import instagram from "../assets/insta.svg";

const StickyBar = () => {

	const isDesktopOrLaptop = useMediaQuery({
		query: "(min-width:  1024px)",
	});

	return (

		<>{isDesktopOrLaptop && (
			<aside className="fixed w-full -z-50 my-60">
				<div className="flex flex-row justify-between w-full">
					<div classNameNme="flex flex-col w-full p-20">
						<div className="p-5 cursor-pointer">
							<a href="https://codepen.io/sartish">
								<Image src={codepen} />
							</a>
						</div>
						<div className="p-5">
							<a href="https://github.com/Sartish">
								<Image src={github} />
							</a>
						</div>
						<div className="p-5">
							<a href="https://www.linkedin.com/in/sara-carlstein-532b2737/">
								<Image src={linkedin} />
							</a>
						</div>
						<div className="p-5">
							<a href="https://www.instagram.com/saritacarlstein/">
								<Image src={instagram} />
							</a>
						</div>
					</div>
					<p className="email">carlstein.sara@gmail.com</p>
				</div>
			</aside>
		)}

		</>

	);
}

export default StickyBar