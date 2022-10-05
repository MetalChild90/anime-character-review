function FormInput({ name, value, placeholder, handleChange }) {
  return (
    <input
      className="Form-input"
      type="text"
      name={name}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      maxLength="30"
    />
  );
}

export default FormInput;
