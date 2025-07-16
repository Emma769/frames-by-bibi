import { Link } from "react-router-dom";
import useHorizontalScroll from "../hooks/useHorizontalScroll";
import Container from "./layouts/Container";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { TbCurrencyNaira } from "react-icons/tb";

const images = [
  "annie-williams-FlP6C5pkMKs-unsplash.jpg",
  "subhajit-jana-Kk5Lh3OQ6ZM-unsplash.jpg",
  "eyekeeper-eyekeeper-7ZOCoFsKSmE-unsplash.jpg",
  "eyekeeper-eyekeeper-EE7DRCzQDoc-unsplash.jpg",
  "charlesdeluvio-Pk3gCC49mCk-unsplash.jpg",
  "rebika-maharjan-RSjUZznYa_Y-unsplash.jpg",
];

export default function FeaturedProducts() {
  const { scrollRef, handleScrollLeft, handleScrollRight, isAtStart, isAtEnd } =
    useHorizontalScroll<HTMLDivElement>(1);

  return (
    <section className="py-10 bg-[hsl(24,100%,97%)]">
      <div>
        <p className="text-center font-[bebas] font-semibold tracking-wider text-2xl">
          <span className="bg-[hsl(24,100%,75%)] py-1 px-2 -rotate-3 inline-block">
            Featured Products
          </span>
        </p>
      </div>
      <div className="py-[3em]">
        <Container>
          <div className="relative">
            <div className="carousel" ref={scrollRef}>
              <ul className="scroll-container">
                {images.map((image, idx) => (
                  <li key={`${image}_${idx}`}>
                    <Link to="/">
                      <img src={image} alt={`featured_photo_${image}`} />
                      <div className="absolute tracking-wider font-[bebas] font-bold bottom-0 left-0 right-0 z-10 flex justify-between px-3 pb-5">
                        <p className="uppercase text-lg bg-[hsl(24,100%,97%)] py-0.5 px-1">
                          rickon
                        </p>
                        <p className="text-xl flex items-center bg-[hsl(24,100%,97%)] py-0.5 px-1">
                          <TbCurrencyNaira className="size-6 -translate-y-[.9px]" />
                          <span>20,000</span>
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {isAtStart ? null : (
              <button
                className="text-white rounded-full absolute top-1/2 -translate-y-1/2 left-0 bg-[rgba(255,102,0,.4)]"
                onClick={handleScrollRight}
              >
                <RxCaretLeft className="size-10" />
              </button>
            )}
            {isAtEnd ? null : (
              <button
                className="absolute top-1/2 -translate-y-1/2 text-white right-0 bg-[rgba(255,102,0,.4)] rounded-full"
                onClick={handleScrollLeft}
              >
                <RxCaretRight className="size-10" />
              </button>
            )}
          </div>
        </Container>
      </div>
    </section>
  );
}
