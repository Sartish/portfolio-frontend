import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Form = () => {
	const { register, handleSubmit } = useForm();
	const [result, setResult] = useState("");


	return (
		<div className="flex justify-center items-center w-[90%] mb-40">
			<form onSubmit={handleSubmit((data) => setResult(JSON.stringify(data)))} className="mb-60">
				<div className="flex flex-wrap -mx-3 mb-6">

					<div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
						<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
							First Name
						</label>
						<input {...register("firstName")} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
					</div>

					<div class="w-full md:w-1/2 px-3">
						<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
							Last Name
						</label>
						<input {...register("lastName")} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />

					</div>

					<div class="w-full md:w-full px-3">
						<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
							Email
						</label>
						<input {...register("email")} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" placeholder="jane.doe@gmail.com" />

					</div>

				</div>
				{/* 	<div class="flex flex-wrap -mx-3 mb-6">
					<div class="w-full px-3">
						<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
							Message
						</label>
						<input {...register("email")} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" placeholder="jane.doe@gmail.com" />

					</div>
				</div> */}


				<p>{result}</p>
				<button type="submit"> send </button>
			</form>
		</div>
	);
}
export default Form