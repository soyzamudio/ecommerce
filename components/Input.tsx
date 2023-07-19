"use client";

import { useState } from "react";

const Input = ({
  placeholder,
  children,
  type = "text",
  clearOnSubmit = false,
  handleSubmit = () => {},
}: {
  placeholder: string;
  children: any;
  type?: string;
  clearOnSubmit?: boolean;
  handleSubmit?: (e?: any, value?: any) => void;
}) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [value, setValue] = useState("");
  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e, value);
        if (clearOnSubmit) {
          setValue("");
        }
      }}
      className={`bg-white rounded-full flex items-center justify-center p-1 gap-x-2 shadow-sm ${
        errorMessage ? "border border-red-500" : ""
      }`}
    >
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        className="max-w-[300px] ml-4 p-1 focus:outline-none"
      />
      <button
        className="bg-footer rounded-full p-2 hover:brightness-95 transition-all"
        onClick={(e) => {
          handleSubmit(e, value);
          if (clearOnSubmit) {
            setValue("");
          }
        }}
      >
        {children}
      </button>
    </form>
  );
};

export default Input;
