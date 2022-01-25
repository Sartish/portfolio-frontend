
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import linkedin from "../assets/linkedin.svg";
import medium from "../assets/medium.svg";
import github from "../assets/github-side.svg";
import codepen from "../assets/codepen.svg";

const FooterMobile = () => {

	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1023px)" });

	return (
		<>
			{isTabletOrMobile && (
				<footer
					class="shadow text-3xl text-white text-center
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
							<Image src={codepen} />
						</div>
						<div className="pr-4 pt-2">
							<Image src={github} />
						</div>
						<div className="pr-4 pt-2">
							<Image src={linkedin} />
						</div>
						<div className="pr-4 pt-2">
							<Image src={medium} />
						</div>
					</div>
					<p>carlstein.sara@gmail.com</p>
				</footer>
			)}
		</>
	)
}

export default FooterMobile