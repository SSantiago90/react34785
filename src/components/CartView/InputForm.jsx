import React from "react";

function InputForm(props) {
  return (
    <>
      <label style={{ width: "100px", marginRight: 4 }}>{props.title}</label>
      <input
        required={true}
        value={props.value}
        name={props.name}
        type="text"
        onChange={props.onInputChange}
      />
    </>
  );
}

export default InputForm;
