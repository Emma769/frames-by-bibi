import {
  useEffect,
  useState,
  type ComponentProps,
  type FormEvent,
} from "react";
import Container from "./layouts/Container";
import { BsEnvelopeAt } from "react-icons/bs";
import { TbEyeCheck, TbEyeX } from "react-icons/tb";

export default function LoginForm() {
  const [persistDetails, setPersistDetails] = useState<"on" | "off">("on");

  const [showPassword, setShowPassword] =
    useState<ComponentProps<"input">["type"]>("password");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="pt-14">
      <Container>
        <div className="font-semibold text-center grid gap-3">
          <p className="text-3xl">Sign In</p>
          <p className="text-sm text-gray-500">
            Hey, Enter your details to sign in to your account
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="sm:w-2/3 lg:w-1/2 mx-auto text-sm mt-8 grid gap-3"
        >
          <div className="grid gap-1">
            <label htmlFor="id-email" className="font-semibold text-gray-600">
              Email
            </label>
            <div className="relative">
              <BsEnvelopeAt className="absolute size-4 fill-gray-500 right-2 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                id="id-email"
                className="border w-full pr-7 border-gray-300 placeholder:font-semibold p-2.5 rounded-sm focus-within:outline-[hsl(24,100%,88%)]"
                placeholder="Enter your email..."
                autoFocus
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
            <div className="flex justify-between items-center my-4">
              <label
                className="font-semibold text-gray-500 text-[12px]"
                htmlFor="id-persist"
              >
                Remember sign in details
              </label>
              <div
                className={`switch ${persistDetails === "off" ? "off" : ""}`}
              >
                <div
                  className={`toggler ${
                    persistDetails === "on" ? "on" : "off"
                  }`}
                ></div>
                <input
                  type="checkbox"
                  id="id-persist"
                  checked={persistDetails === "on"}
                  onChange={() =>
                    setPersistDetails((prev) => (prev === "on" ? "off" : "on"))
                  }
                  className="accent-[hsl(24,100%,88%)] w-full opacity-0 cursor-pointer"
                />
              </div>
            </div>
            <div>
              <button className="font-semibold capitalize bg-[hsl(24,100%,88%)] cursor-pointer p-1.5 py-3 hover:bg-[hsl(24,100%,84%)] transition-colors rounded-sm w-full">
                login
              </button>
            </div>
          </div>
        </form>
      </Container>
    </div>
  );
}
