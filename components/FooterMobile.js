
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import linkedin from "../assets/linkedin.svg";
import instagram from "../assets/insta.svg";
import github from "../assets/github-side.svg";
import codepen from "../assets/codepen.svg";

const FooterMobile = () => {

	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1023px)" });

	return (
		<>
			{isTabletOrMobile && (
				<footer
					className="shadow text-3xl text-white text-center
						fixed
						inset-x-0
						bottom-0
						flex
						flex-col
						w-full
						justify-center
						bg-yellow
						bg-opacity-80
						items-center
						">
					<div className="flex flex-row justify-around mb-0 w-1/2">
						<div className="pr-4 pt-2">
							<a href="https://codepen.io/sartish">
								<Image src={codepen} />
							</a>
						</div>
						<div className="pr-4 pt-2">
							<a href="https://github.com/Sartish">
								<Image src={github} />
							</a>
						</div>
						<div className="pr-4 pt-2">
							<a href="https://www.linkedin.com/in/sara-carlstein-532b2737/">
								<Image src={linkedin} />
							</a>
						</div>
						<div className="pr-4 pt-2">
							<a href="https://www.instagram.com/saritacarlstein/">
								<Image src={instagram} />
							</a>
						</div>
					</div>
				</footer>
			)}
		</>
	)
}

export default FooterMobile