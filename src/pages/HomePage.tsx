import { Link, useNavigate } from "react-router-dom";
import Container from "../components/layouts/Container";
import Card from "../components/layouts/Card";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { useRef } from "react";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <>
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
              onClick={() => navigate("/catalog")}
            >
              Browse our collection
            </button>
          </div>
        </div>
        <div className="grid place-content-center pt-16">
          <img src="/undraw_shopping_a55o.svg" alt="shopping illustration" />
        </div>
      </section>
      <FeaturedProducts />
    </>
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
  const scrollRef = useRef<HTMLUListElement | null>(null);

  const scrollAmount = 350;

  const handleScrollRight = () => {
    scrollRef.current?.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  const handleScrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -scrollAmount,
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
            <button
              className="bg-[rgba(255,102,0,.2)] rounded-sm py-3 cursor-pointer right-[101%] absolute top-1/2 -translate-y-1/2 z-10 hover:bg-[rgba(255,102,0,.3)] transition-colors"
              onClick={handleScrollLeft}
            >
              <LuChevronLeft className="stroke-[#ff6600] size-6" />
            </button>
            <button
              className="bg-[rgba(255,102,0,.2)] rounded-sm py-3 absolute z-10 top-1/2 -translate-y-1/2 left-[101%] cursor-pointer hover:bg-[rgba(255,102,0,.3)] transition-colors"
              onClick={handleScrollRight}
            >
              <LuChevronRight className="stroke-[#ff6600] size-6" />
            </button>
            <ul
              className="flex items-center gap-x-3 overflow-x-auto [&::-webkit-scrollbar]:h-0 [-ms-overflow-style:none] [scrollbar-width:none]"
              ref={scrollRef}
            >
              {images.map((image, i) => (
                <li key={`${image}_${i}`} className="shrink-0 grow-0">
                  <Link to="/">
                    <Card>
                      <div className="h-[20em] w-[15em] sm:h-[25em] sm:w-[20] lg:h-[30em] lg:w-[25em] relative after:absolute after:content-[''] after:inset-0 after:bg-[rgba(255,102,0,.1)]">
                        <img
                          src={`/${image}`}
                          alt="product photo"
                          className="block w-full h-full object-cover"
                        />
                      </div>
                      <div></div>
                    </Card>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </div>
    </section>
  );
}
