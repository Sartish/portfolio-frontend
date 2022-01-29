

// setting states
import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Aos from 'aos';
import 'aos/dist/aos.css';

export const Contact = () => {

	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);

	const [firstName, setFirstName] = useState();
	const [lastName, setLastName] = useState();
	const [email, setEmail] = useState();
	const [message, setMessage] = useState();
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm('service_br8pjk9', 'template_s2i5nt8', form.current, 'user_0r417dP2BROp07yyGEDtb')
			.then((result) => {
				console.log(result.text);
			}, (error) => {
				console.log(error.text);
			});
	};

	return (
		<div className="flex justify-center items-center flex-col mb-[60px]">
			<div data-aos="fade-up" className="header-container">
				<h1>Contact me</h1>
				<h2>I am always up for a chat</h2>
			</div>
			<form
				data-aos="fade-up"
				ref={form}
				onSubmit={sendEmail}
				className="w-[60%] mt-[40px]">
				<div className="flex flex-wrap -mx-3 mb-6">
					<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
						<label className="block lowercase font-Poppins font-semibold text-xs tracking-wide leading-relaxed mb-2">
							First Name
						</label>
						<input
							name="user_first_name"
							type="text"
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
							className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
						/>
					</div>
					<div className="w-full md:w-1/2 px-3">
						<label className="block lowercase font-Poppins font-semibold text-xs tracking-wide leading-relaxed mb-2">
							Last Name
						</label>
						<input
							name="user_last_name"
							type="text"
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
							className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						/>
					</div>
				</div>
				<div className="flex flex-wrap -mx-3 mb-6">
					<div className="w-full px-3">
						<label className="block lowercase font-Poppins font-semibold text-xs tracking-wide leading-relaxed mb-2">Email</label>
						<input
							type="email"
							name="user_email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						/>
					</div>
				</div>

				<div className="flex flex-wrap -mx-3 mb-6">
					<div className="w-full px-3">
						<label className="block lowercase font-Poppins font-semibold text-xs tracking-wide leading-relaxed mb-2">Message</label>
						<textarea
							name="message"
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
						/>
					</div>
				</div>
				<button
					type="submit"
					value="Send"
					className="
						shadow
						bg-green
						hover:opacity-60
						focus:shadow-outline
						focus:outline-none
						text-black 
						uppercase 
						font-Poppins 
						font-bold text-base 
						tracking-widest 
						leading-relaxed
						py-2
						px-4
						rounded
						cursor-pointer
						">Send</button>

			</form >
		</div>
	);
};

export default Contact