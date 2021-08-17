import React from "react";

const FormInput = (props) => {
  const { label, name, onChange, value } = props;

  return (
    <div>
      <div className="form-label-div ">
        <label>
          {label}
          {props.required && <span style={{ color: "red" }}>*</span>}
        </label>
        <br />
        <input
          className="search"
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default FormInput;
