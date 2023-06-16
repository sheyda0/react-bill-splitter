const Input = ({ label, type, value, onChange }) => {
	return (
		<div className="w-full flex justify-between mb-4">
			<label>{label}</label>
			<input
				type={type}
				className="rounded-md py-1 w-[248px]"
				value={value}
				onChange={onChange}
			/>
		</div>
	);
};

export default Input;
