import github from "../assets/github-side.svg";
import linkedin from "../assets/linkedin.svg";
import medium from "../assets/medium.svg";
import codepen from "../assets/codepen.svg";
import Image from "next/image";
import styled from "styled-components";

const StickyBar = () => {
	return (
		<>

			<aside class="fixed w-full z-10 my-60">
				<StickyWrapper>
					<SocialIconWrapper>
						<SocialMediaIcon>
							<Image src={github} />
						</SocialMediaIcon>
						<SocialMediaIcon>
							<Image src={linkedin} />
						</SocialMediaIcon>
						{/* 						<SocialMediaIcon>
							<Image src={instagram} />
						</SocialMediaIcon> */}
						<SocialMediaIcon>
							<Image src={medium} />
						</SocialMediaIcon>
						<SocialMediaIcon>
							<Image src={codepen} />
						</SocialMediaIcon>
					</SocialIconWrapper>
					<Email>Carlstein.sara@gmail.com</Email>
				</StickyWrapper>
			</aside>
		</>
	);
};

export default StickyBar;

const StickyWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const SocialIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
`;
const SocialMediaIcon = styled.div`
  padding: 15px;
`;

const Email = styled.div`
  padding: 10px;
  display: flex;
  width: 5px;
  letter-spacing: 4px;
  line-height: 20px;
  font-size: 18px;
  transform-origin: 0 0;
  transform: rotate(90deg);
`;
const PlantImage = styled.div`
  width: 100px;
`;
