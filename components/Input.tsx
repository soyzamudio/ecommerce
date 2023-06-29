"use client";

import { useEffect, useState } from "react";

const Input = ({
  placeholder,
  children,
  type = "text",
}: {
  placeholder: string;
  children: any;
  type?: string;
}) => {
  const [errorMessage, setErrorMessage] = useState("");
  return (
    <div
      className={`bg-white rounded-full flex items-center justify-center p-1 gap-x-2 ${
        errorMessage ? "border border-red-500" : ""
      }`}
    >
      <input
        type={type}
        placeholder={placeholder}
        className="w-[300px] ml-4 p-1 focus:outline-none"
      />
      <button
        className="bg-footer rounded-full p-2 hover:brightness-95 transition-all"
        onClick={() => {
          console.log("Submit");
        }}
      >
        {children}
      </button>
    </div>
  );
};

export default Input;
