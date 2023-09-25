const Input = ({ label, type, value, onChange }) => {
  return (
    <div className="w-full flex justify-between mb-4">
      {/* <label>{label}</label> */}
      <input
        type={type}
        className="rounded-md py-2 px-3 w-full border border-[#FF5152] input-shadow outline-none"
        value={value}
        placeholder={label}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
