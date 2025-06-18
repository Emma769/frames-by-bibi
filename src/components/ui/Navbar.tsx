import { useRef } from "react";
import useNavScroll from "../../hooks/useNavScroll";
import { Link } from "react-router-dom";
import Container from "../layouts/Container";
import { RiSearchLine } from "react-icons/ri";
import { TbShoppingBag } from "react-icons/tb";
import useToggle from "../../hooks/useToggle";
import useEscape from "../../hooks/useEscape";
import useClickOutside from "../../hooks/useClickOutside";

export default function Navbar() {
  const hamburgerRef = useRef<HTMLButtonElement | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);
  const [isVisible] = useNavScroll({ navRef });
  const [show, toggle, close] = useToggle();
  useEscape({ close });
  useClickOutside({ show, close, trigger: hamburgerRef, target: navRef });

  return (
    <div className={`nav ${isVisible ? "visible" : ""}`} ref={navRef}>
      <Container>
        <div className="flex justify-between h-[7em]">
          <div className="flex gap-x-[2em] sm:gap-x-[4em] items-center md:justify-end md:flex-row-reverse grow">
            <button
              className={`hamburger ${show ? "slant-cross" : ""}`}
              onClick={toggle}
              ref={hamburgerRef}
            >
              <div></div>
              <div></div>
              <div></div>
            </button>
            <ul className={`nav-items ${show ? "show" : ""}`}>
              <li>
                <Link
                  to="/"
                  className="font-semibold capitalize hover:text-[#00ccff] transition-colors"
                >
                  home
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="font-semibold capitalize hover:text-[#00ccff] transition-colors"
                >
                  catalog
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="font-semibold capitalize hover:text-[#00ccff] transition-colors"
                >
                  contact
                </Link>
              </li>
            </ul>
            <Link
              to="/"
              className="font-[seaweed] text-2xl lg:text-3xl font-bold text-[#00ccff]"
            >
              frames by bibi
            </Link>
          </div>
          <div className="flex items-center gap-x-4">
            <div>
              <button className="translate-y-[3px]">
                <RiSearchLine className="text-2xl hover:scale-110 transition-transform" />
              </button>
            </div>
            <div>
              <Link to="/">
                <TbShoppingBag className="text-2xl hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
