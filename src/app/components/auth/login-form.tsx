"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useTransition } from "react";
import { login } from "@/app/actions/login";
import { FormError } from "./form-error";
import PasswordInput from "../ui/passwordInput";
import Button from "../ui/button";

export const LoginForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const onSubmit = (formData: FormData) => {
    startTransition(async () => {
      const data = await login(formData);
      setError(data?.error?.message);
    });
  };

  return (
    <>
      <h1 className="relative top-56 text-white font-bold text-[34px] tracking-[0.37px]">
        Login
      </h1>

      <div className="flex flex-row justify-end mt-6 mr-6">
        <Image
          src="/ciao_bodyType2.svg"
          width={129}
          height={316}
          alt="CiaoChow Character2"
        />
      </div>

      <form action={async (formData) => onSubmit(formData)}>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-base font-medium text-gray-dark"
          >
            email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="yourmail@mail.com"
            className="mt-1 p-3 rounded-md w-full bg-greyLight text-gray border-0"
          />
        </div>

        <div className="mb-4">
          <PasswordInput />
        </div>
        <Button className="bg-chow text-white mt-4 px-32 py-3 text-lg w-full">
          <div>Login</div>
        </Button>
      </form>
      <FormError message={error} />

      <p className="text-center mt-8 mb-4 text-chow text-[12px]">
        Don’t have an account?{" "}
        <Link
          href="/register"
          className="font-bold
				"
        >
          Register
        </Link>
      </p>
    </>
  );
};
