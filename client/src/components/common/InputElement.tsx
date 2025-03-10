type InputElementPropsType = {
  placeholder: string;
  type: string;
  onChange: (value: string) => string | void;
  onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  customClassName?: string;
  value: string;
};

function InputElement(props: InputElementPropsType) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const changedValue = props.onChange(event.target.value);
    if (changedValue) event.target.value = changedValue;
  };
  const handleBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onBlur && props.onBlur(event);
  };
  return (
    <>
      <input
        placeholder={props.placeholder}
        type={props.type}
        value={props.value}
        onChange={handleChange}
        onBlur={handleBlur}
        className={`px-[15px] py-[10px] border-[2px] w-full bg-white shadow-md rounded-[6px] ${
          props.customClassName ?? ""
        }`}
      />
    </>
  );
}

export default InputElement;
