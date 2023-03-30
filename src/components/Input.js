import React from "react";

const Input = ({ label, ...rest }) => {
  return (
    <>
      <div className="space-y-2">
        <label htmlFor="name">{label}</label>
        <input {...rest} />
      </div>
    </>
  );
};

export default Input;
