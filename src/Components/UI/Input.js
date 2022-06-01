const Input = (props) => {
  return (
    <div>
      <label>{props.label}</label>
      {/* TODO: learn about this spread */}
      <input {...props.input} />
    </div>
  );
};

export default Input;
