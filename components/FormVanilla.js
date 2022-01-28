import { useState } from "react";
import { useForm } from "react-hook-form";

const FormVanilla = () => {
	const { register, handleSubmit } = useForm();
	const [result, setResult] = useState("");

	return (
		<form onSubmit={handleSubmit((data) => setResult(JSON.stringify(data)))} className="mb-60">
			<input {...register("firstName")} placeholder="First name"
				className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"
			/>
			<input {...register("lastName")} placeholder="Last name" />
			<p>{result}</p>
			<button type="submit"> send </button>
		</form>
	);
}

export default FormVanilla