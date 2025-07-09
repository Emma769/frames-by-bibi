import { RiMenu2Fill } from "react-icons/ri";
import { TbShoppingBag } from "react-icons/tb";
import { Link, NavLink, useLocation } from "react-router-dom";
import Container from "../layouts/Container";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GrClose } from "react-icons/gr";
import useEscape from "../../hooks/useEscape";
import { HiSearchCircle } from "react-icons/hi";
import useClickOutside from "../../hooks/useClickOutside";
import useNavScroll from "../../hooks/useNavScroll";

const links = [
  { path: "/", title: "home" },
  { path: "/catalog", title: "catalog" },
  { path: "/contact", title: "contact" },
];

export default function Navbar() {
  const location = useLocation();

  const [showNav, setShowNav] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const handleShowNav = () => {
    document.body.style.overflow = "hidden";
    setShowNav(true);
  };

  const handleCloseNav = () => {
    document.body.style.overflow = "auto";
    setShowNav(false);
  };

  const { direction } = useNavScroll();

  useEffect(() => {
    handleCloseNav();
  }, [location.pathname]);

  return (
    <header className={direction === "up" ? "up" : "down"}>
      <Container>
        <nav>
          <div className="logo-container">
            <Link to="/">
              <img src="/logo.svg" alt="logo" />
            </Link>
          </div>
          <div className="links-container">
            <button className="hamburger" onClick={handleShowNav}>
              <RiMenu2Fill />
            </button>
            <Links />
            <AnimatePresence>
              {showNav && <AltLinks close={handleCloseNav} />}
            </AnimatePresence>
          </div>
          <div className="alt-btns">
            <Link to="/cart">
              <TbShoppingBag />
            </Link>
            <div>
              <button
                className="cursor-pointer"
                onClick={() => setShowSearch(true)}
              >
                <HiSearchCircle className="fill-[#ff6600]" />
              </button>
              <AnimatePresence>
                {showSearch && (
                  <SearchForm close={() => setShowSearch(false)} />
                )}
              </AnimatePresence>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}

function Links() {
  return (
    <ul>
      {links.map((link, i) => (
        <li key={`${link.title}_${i}`}>
          <NavLink to={link.path} className="link">
            {link.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

type AltLinksProps = {
  close: () => void;
};

function AltLinks({ close }: AltLinksProps) {
  useEscape(close);

  return (
    <motion.div
      className="alt-links"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.2 } }}
      exit={{ opacity: 0 }}
      onClick={close}
    >
      <motion.div
        className="content"
        initial={{ translateX: -100 }}
        animate={{ translateX: 0, transition: { duration: 0.1 } }}
        exit={{ translateX: -100 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="close-btn-container">
          <button onClick={close}>
            <GrClose />
          </button>
        </div>
        <ul className="links">
          {links.map((link, i) => (
            <li key={`${link.title}_${i}`} className="my-2">
              <NavLink to={link.path} className="link">
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}

type SearchFormProps = {
  close: () => void;
};

function SearchForm({ close }: SearchFormProps) {
  const formRef = useRef<HTMLFormElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  useEscape(close);
  useClickOutside(formRef, closeBtnRef, close);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <motion.form
      className="search-form"
      onSubmit={handleSubmit}
      initial={{ translateY: -100, opacity: 0 }}
      animate={{
        translateY: 0,
        opacity: 1,
        transition: { delay: 0.1, type: "tween" },
      }}
      exit={{ translateY: -100, transition: { type: "tween" } }}
      ref={formRef}
    >
      <div className="w-[70%] sm:w-[60%] lg:w-[50%] xl:w-[40%] bg-white absolute left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%]">
        <input
          type="text"
          placeholder="What are you looking for?"
          className="placeholder:font-bold shadow-xs rounded-xs w-full p-2.5 pr-10 focus-within:outline-0"
          autoFocus
        />
        <button className="cursor-pointer">
          <HiSearchCircle className="fill-[#ff6600] absolute top-[50%] -translate-y-[50%] right-1" />
        </button>
        <button className="cursor-pointer" onClick={close} ref={closeBtnRef}>
          <GrClose className="absolute top-[50%] -translate-y-[50%] -right-9" />
        </button>
      </div>
    </motion.form>
  );
}
