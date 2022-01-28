import Image from "next/image"
import articleonepic from "../assets/newsizearticle.png"
import articletwopic from "../assets/newsizetwo.png"
import articlethreepic from "../assets/newsizethree.png"
const WritingCard = () => {

	return (
		<div className="flex justify-center items-center flex-col">
			<div className="header-container">
				<h1>Writings</h1>
				<h2>Some of my writings</h2>
			</div>
			<div className="pr-20 pl-20 pb-20 pt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5 w-[90%] items-center justify-items-center border-2">

				<div className="rounded overflow-hidden shadow-lg">
					<div className="w-full">
						<Image src={articleonepic} alt="Mountain" />
					</div>
					<div className="px-6 py-4">
						<div className="font-bold text-xl mb-2">Mountain</div>
						<p className="text-gray-700 text-base">
							In March 2020 around the first corona wave in Sweden. I started to feel the urgent need for a change. The longing that can be felt in both the mind, body, and soul.
						</p>
					</div>
					<div className="px-6 pt-4 pb-2">
						<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#bootcamp</span>
						<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#frontend</span>
						<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#journey</span>
					</div>
				</div>



				<div className="rounded overflow-hidden shadow-lg w-full">
					<div className="w-full">
						<Image src={articletwopic} alt="Mountain" />
					</div>
					<div className="px-6 py-4">
						<div className="font-bold text-xl mb-2">River</div>
						<p className="text-gray-700 text-base">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
						</p>
					</div>
					<div className="px-6 pt-4 pb-2">
						<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
						<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
						<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#summer</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default WritingCard

