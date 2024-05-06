"use client";

import { useState } from "react";
import { IoMdEyeOff } from "react-icons/io";
import { IoMdEye } from "react-icons/io";

const PasswordInput: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevVisible) => !prevVisible);
  };

  return (
    <div className="relative">
      <label
        htmlFor="password"
        className="block text-base font-medium text-gray-dark"
      >
        password
      </label>
      <input
        type={passwordVisible ? "text" : "password"}
        id="password"
        name="password"
        placeholder="your password"
        className="mt-1 p-3 rounded-md w-full bg-greyLight text-gray border-0"
      />
      <button
        className="absolute right-4 top-10 text-2xl"
        type="button"
        onClick={togglePasswordVisibility}
      >
        {passwordVisible ? (
          <IoMdEye className="text-gray-300" />
        ) : (
          <IoMdEyeOff className="text-gray-300" />
        )}
      </button>
    </div>
  );
};

export default PasswordInput;
