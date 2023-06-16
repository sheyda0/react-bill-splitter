const Button = ({ children, className, onClick }) => {
	return (
		<button
			className={`bg-orange-400 px-3 py-1 rounded-lg h-[35px] ${className}`}
			onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
