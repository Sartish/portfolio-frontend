import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import linkedin from "../assets/linkedin.svg";
import medium from "../assets/medium.svg";
import github from "../assets/github-side.svg";
import codepen from "../assets/codepen.svg";

const StickyBar = () => {

	const isDesktopOrLaptop = useMediaQuery({
		query: "(min-width:  1024px)",
	});

	return (

		<>{isDesktopOrLaptop && (
			<aside className="fixed w-full z-10 my-60 bg-red-500">
				<div className="flex flex-row justify-between w-full">
					<div classNameNme="flex flex-col w-full p-20">
						<div className="p-5">
							<Image src={codepen} />
						</div>
						<div className="p-5">
							<Image src={github} />
						</div>
						<div className="p-5">
							<Image src={linkedin} />
						</div>
						<div className="p-5">
							<Image src={medium} />
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