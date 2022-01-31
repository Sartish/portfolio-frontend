

// setting states
import React, { useRef, useState, useEffect } from 'react';
import swal from 'sweetalert';
import emailjs from '@emailjs/browser';
import Aos from 'aos';
import 'aos/dist/aos.css';

export const Contact = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const form = useRef();


	const onFormSubmit = () => {
		if (firstName.length > 0 && lastName.length > 0 && email.length > 0 && message.length > 0) {
			swal({
				title: "Success!",
				text: "Thank you, I will come back to you",
				icon: "success",
				button: "ok",
				imageUrl: 'https://media.giphy.com/media/D28t0Rto3daKI/giphy.gif'
			});
		} else {
			swal({
				itle: "Sorry",
				text: "you are missing information",
				icon: "error",
				button: "ok",
			});
		}
	};


	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);


	const inputMin = { minLength: 5 };

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
		<div className="flex justify-center items-center flex-col mb-[60px] z-30">
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
							First name
						</label>
						<input
							variant="outlined"
							margin="normal"
							required
							fullWidth
							name="user_first_name"
							type="text"
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
							className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
						/>
					</div>
					<div className="w-full md:w-1/2 px-3">
						<label className="block lowercase font-Poppins font-semibold text-xs tracking-wide leading-relaxed mb-2">
							Last name
						</label>
						<input
							variant="outlined"
							margin="normal"
							required
							fullWidth
							name="user_last_name"
							type="text"
							autoFocus
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
							variant="outlined"
							margin="normal"
							required
							fullWidth
							name="user_first_name"
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						/>
					</div>
				</div>

				<div className="flex flex-wrap -mx-3 mb-6">
					<div className="w-full px-3">
						<label className="block lowercase font-Poppins font-semibold text-xs tracking-wide leading-relaxed mb-2">Message</label>
						<textarea
							autoFocus
							inputProps={inputMin}
							variant="outlined"
							margin="normal"
							required
							fullWidth
							type="text"
							name="message"
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500 h-48"
						/>
					</div>
				</div>
				<button
					onClick={onFormSubmit}
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