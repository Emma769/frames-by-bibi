import { Link, useNavigate } from "react-router-dom";
import Container from "../components/layouts/Container";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { useRef } from "react";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProducts />
    </>
  );
}

function HeroSection() {
  const navigate = useNavigate();

  const gotoCatalog = () => navigate("/catalog");

  return (
    <section className="min-h-[100dvh] pt-[6.5em] bg-[hsl(24,100%,75%)]">
      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold flex items-center flex-col pt-16">
        <div>
          <p className="my-3">
            See{" "}
            <span className="text-[#ff6600] bg-[hsl(24,100%,97%)] px-2 -rotate-3 inline-block font-[bebas] tracking-wider">
              Better<span className="text-gray-800">.</span>
            </span>
          </p>
          <p className="my-3">
            Look{" "}
            <span className="text-[#ff6600] bg-[hsl(24,100%,97%)] px-2 -rotate-3 inline-block font-[bebas] tracking-wider">
              Sharper<span className="text-gray-800">.</span>
            </span>
          </p>
          <p className="my-3">
            Frame Life{" "}
            <span className="text-[#ff6600] bg-[hsl(24,100%,97%)] px-2 -rotate-3 inline-block font-[bebas] tracking-wider">
              Beautifully<span className="text-gray-800">.</span>
            </span>
          </p>
        </div>
      </div>
      <div className="p-6 grid place-content-center text-sm sm:text-lg opacity-80">
        <p className="text-center text-gray-900 font-semibold">
          Welcome to Styles and Shades by Santabibi <br />
          Your first stop for eyewears, photo frames and baby items
        </p>
        <div className="pt-5 flex justify-center">
          <button
            className="px-5 py-3.5 text-[#ff6600] bg-gray-800 rounded-4xl font-[bebas] font-semibold tracking-wider cursor-pointer hover:bg-[#ff6600] hover:text-gray-800 transition-colors"
            onClick={gotoCatalog}
          >
            Browse our collection
          </button>
        </div>
      </div>
      <div className="grid place-content-center pt-16">
        <img src="/undraw_shopping_a55o.svg" alt="shopping illustration" />
      </div>
    </section>
  );
}

const images = [
  "annie-williams-FlP6C5pkMKs-unsplash.jpg",
  "subhajit-jana-Kk5Lh3OQ6ZM-unsplash.jpg",
  "eyekeeper-eyekeeper-7ZOCoFsKSmE-unsplash.jpg",
  "eyekeeper-eyekeeper-EE7DRCzQDoc-unsplash.jpg",
  "charlesdeluvio-Pk3gCC49mCk-unsplash.jpg",
  "rebika-maharjan-RSjUZznYa_Y-unsplash.jpg",
];

function FeaturedProducts() {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const handleScrollLeft = () => {
    scrollContainerRef.current?.scrollBy({
      left: 200,
      behavior: "smooth",
    });
  };

  const handleScrollRight = () => {
    scrollContainerRef.current?.scrollBy({
      left: -200,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-8 bg-[hsl(24,100%,97%)]">
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
            <div className="carousel" ref={scrollContainerRef}>
              <ul className="scroll-container">
                {images.map((image, idx) => (
                  <li key={`${image}_${idx}`}>
                    <Link to="/">
                      <img src={image} alt={`featured_photo_${image}`} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <button
              className="text-white rounded-full absolute top-1/2 -translate-y-1/2 left-0 bg-[rgba(255,102,0,.4)]"
              onClick={handleScrollRight}
            >
              <RxCaretLeft className="size-10" />
            </button>
            <button
              className="absolute top-1/2 -translate-y-1/2 text-white right-0 bg-[rgba(255,102,0,.4)] rounded-full"
              onClick={handleScrollLeft}
            >
              <RxCaretRight className="size-10" />
            </button>
          </div>
        </Container>
      </div>
    </section>
  );
}
