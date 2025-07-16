import { BsEnvelopeAt } from "react-icons/bs";
import Container from "./layouts/Container";
import { Link } from "react-router-dom";
import { useState, type ComponentProps } from "react";
import { TbEyeCheck, TbEyeX } from "react-icons/tb";
import { FiUser } from "react-icons/fi";

export default function RegisterForm() {
  const [showPassword, setShowPassword] =
    useState<ComponentProps<"input">["type"]>("password");

  return (
    <div className="pt-12">
      <Container>
        <div className="font-semibold text-center grid gap-3">
          <p className="text-3xl">Sign Up</p>
          <p className="text-sm text-gray-500">
            Hey, Enter your details to register to your account
          </p>
        </div>
        <form className="sm:w-2/3 lg:w-1/2 mx-auto text-sm mt-8 grid gap-3">
          <div className="grid gap-1">
            <label htmlFor="id-name" className="font-semibold text-gray-600">
              Name
            </label>
            <div className="relative">
              <FiUser className="absolute size-4 stroke-gray-500 right-2 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                id="id-name"
                className="border w-full pr-7 border-gray-300 placeholder:font-semibold p-2.5 rounded-sm focus-within:outline-[hsl(24,100%,88%)]"
                placeholder="Enter your name..."
                autoFocus
              />
            </div>
          </div>
          <div className="grid gap-1">
            <label htmlFor="id-email" className="font-semibold text-gray-600">
              Email
            </label>
            <div className="relative">
              <BsEnvelopeAt className="absolute size-4 fill-gray-500 right-2 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                id="id-email"
                className="border w-full pr-7 border-gray-300 placeholder:font-semibold p-2.5 rounded-sm focus-within:outline-[hsl(24,100%,88%)]"
                placeholder="Enter your email..."
              />
            </div>
          </div>
          <div className="grid gap-1">
            <label
              htmlFor="id-password"
              className="font-semibold text-gray-600"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword}
                id="id-password"
                className="border w-full border-gray-300 placeholder:font-semibold p-2.5 rounded-sm focus-within:outline-[hsl(24,100%,88%)]"
                placeholder="Enter your password..."
              />
              <button
                className="cursor-pointer"
                type="button"
                onClick={() =>
                  setShowPassword((prev) =>
                    prev === "text" ? "password" : "text"
                  )
                }
              >
                {showPassword === "text" ? (
                  <TbEyeCheck className="size-5 absolute right-2 top-1/2 -translate-y-1/2 stroke-gray-500" />
                ) : (
                  <TbEyeX className="size-5 absolute right-2 top-1/2 -translate-y-1/2 stroke-gray-500" />
                )}
              </button>
            </div>
            <div className="mt-3">
              <button className="font-semibold capitalize bg-[hsl(24,100%,88%)] cursor-pointer p-1.5 py-3 hover:bg-[hsl(24,100%,84%)] transition-colors rounded-sm w-full">
                register
              </button>
            </div>
          </div>
          <div className="mt-3 text-gray-600">
            <p className="font-semibold">
              Already registered? Sign in{" "}
              <Link
                to="/login"
                className="text-[hsl(24,100%,67%)] hover:text-[hsl(24,100%,57%)] transition-colors"
              >
                here
              </Link>
            </p>
          </div>
        </form>
      </Container>
    </div>
  );
}
