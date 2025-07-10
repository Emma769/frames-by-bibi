import { Link } from "react-router-dom";
import Container from "../layouts/Container";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaArrowRightLong, FaXTwitter } from "react-icons/fa6";
import { BiCopyAlt } from "react-icons/bi";
import useCopy from "../../hooks/useCopy";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

export default function Footer() {
  const { handleCopy, isCopied } = useCopy();

  return (
    <footer className="bg-[hsl(24,100%,95%)] min-h-[6.5em] flex flex-col justify-between py-8">
      <Container>
        <div className="font-semibold mb-10">
          <div className="flex flex-col sm:flex-row gap-10 justify-between">
            <div className="w-fit mx-auto sm:mx-0 text-center sm:text-left">
              <p className="text-xs pb-1 text-gray-500 uppercase font-semibold">
                Contact Us
              </p>
              <p className="text-xl pb-2 sm:w-[10em]">
                How we can serve you better?
              </p>
              <div className="flex flex-col items-center sm:block">
                <a
                  href="tel:2349023276116"
                  className="flex items-center w-fit bg-[hsl(24,100%,75%)] hover:bg-[hsl(24,100%,70%)] transition-colors text-lg tracking-wider gap-3 p-2.5 font-[bebas] px-6 rounded-3xl"
                >
                  <span>Call us now</span>
                  <FaArrowRightLong />
                </a>
                <p className="pt-4 text-xs text-gray-500 uppercase font-semibold">
                  or email us at
                </p>
                <div className="mt-1 w-fit h-fit relative">
                  <input
                    type="text"
                    disabled
                    className="bg-[rgba(255,102,0,.1)] p-3.5 px-7 rounded-3xl text-sm"
                    defaultValue="santabibi@gmail.com"
                  />
                  <button
                    className="absolute right-4 cursor-pointer top-1/2 -translate-y-1/2"
                    onClick={() => handleCopy("santabibi@gmail.com")}
                  >
                    {isCopied ? <IoCheckmarkDoneOutline /> : <BiCopyAlt />}
                  </button>
                </div>
              </div>
            </div>
            <div className="text-xs text-center sm:text-left">
              <p className="uppercase text-gray-500 font-semibold pb-2">
                Quick links
              </p>
              <ul className="text-sm flex flex-col gap-1">
                <li>
                  <Link
                    to="/"
                    className="hover:text-[#ff6600] transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/catalog"
                    className="hover:text-[#ff6600] transition-colors"
                  >
                    Catalog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-[#ff6600] transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
      <Link to="/">
        <div className="w-16 h-16 mx-auto rounded-xl overflow-hidden">
          <img
            src="/alt-logo.jpg"
            alt="alt logo"
            className="block w-full h-full object-cover"
          />
        </div>
      </Link>
      <Container>
        <div className="flex flex-col gap-3 sm:flex-row items-center justify-between mt-4">
          <div className="text-sm font-semibold">
            &copy; 2025 Shades & Styles by Santabibi.
          </div>
          <ul className="flex items-center gap-x-3">
            <li>
              <a href="#" className="hover:text-[#ff6600] transition-colors">
                <FaFacebook className="size-4" />
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#ff6600] transition-colors">
                <AiFillInstagram className="size-4" />
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#ff6600] transition-colors">
                <FaXTwitter className="size-4" />
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
