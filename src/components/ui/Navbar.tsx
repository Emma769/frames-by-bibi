import { useEffect, useRef } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { TbShoppingBag } from "react-icons/tb";
import Container from "../layouts/Container";
import useToggle from "../../hooks/useToggle";
import useClickOutside from "../../hooks/useClickOutside";
import useEscape from "../../hooks/useEscape";
import { IoCloseSharp } from "react-icons/io5";
import useNavScroll from "../../hooks/useNavScroll";
import SearchForm from "../SearchForm";

export default function Navbar() {
  const location = useLocation();

  const linksRef = useRef<HTMLUListElement | null>(null);
  const hamburgerRef = useRef<HTMLButtonElement | null>(null);
  const searchRef = useRef<HTMLDivElement | null>(null);
  const searchBtnRef = useRef<HTMLButtonElement | null>(null);

  const [showNav, , closeNav, openNav] = useToggle();

  const handleCloseNav = () => {
    document.body.style.overflow = "auto";
    closeNav();
  };

  useClickOutside(linksRef, hamburgerRef, handleCloseNav);
  useEscape(handleCloseNav);

  const { direction } = useNavScroll();

  const [showSearch, , closeSearch, openSearch] = useToggle();

  useEscape(closeSearch);
  useClickOutside(searchRef, searchBtnRef, closeSearch);

  const handleOpenNav = () => {
    document.body.style.overflow = "hidden";
    openNav();
  };

  useEffect(() => {
    handleCloseNav();
  }, [location.pathname]);

  return (
    <section
      className={`navbar-container ${direction === "up" ? "up" : "down"}`}
    >
      <Container>
        <div className="navbar">
          <div className="navbar__logo">
            <Link to="/">
              <img src="logo.svg" alt="logo" />
            </Link>
          </div>
          <nav className={showNav ? "show" : ""}>
            <button
              className="hamburger"
              onClick={handleOpenNav}
              ref={hamburgerRef}
            >
              <div></div>
              <div></div>
              <div></div>
            </button>
            <ul ref={linksRef}>
              <button className="cancel" onClick={handleCloseNav}>
                <IoCloseSharp />
              </button>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/catalog"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  catalog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  contact
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="alt-nav">
            <Link to="/cart">
              <TbShoppingBag />
            </Link>
            <button
              className="hover:cursor-pointer"
              onClick={openSearch}
              ref={searchBtnRef}
            >
              <FiSearch />
            </button>
            <SearchForm
              isOpen={showSearch}
              close={closeSearch}
              ref={searchRef}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
