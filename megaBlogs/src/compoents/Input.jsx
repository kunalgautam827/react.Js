import React, { useId, forwardRef } from "react";

const Input = forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref,
) {
  let id = useId();

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="inline-block mb-1 pl-1">
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        className={` ${className}`}
        {...props}
        ref={ref}
      />
    </div>
  );
});

export default Input;
