import { useNavigate } from "react-router-dom";
import ProductCollection from "../components/ProductCollection";
import FeaturedProducts from "../components/FeaturedProducts";
import useScrollIntoView from "../hooks/useScrollIntoView";

export default function HomePage() {
  const navigate = useNavigate();
  const gotoCatalog = () => navigate("/catalog");

  const topRef = useScrollIntoView<HTMLDivElement>();

  return (
    <>
      <div ref={topRef}></div>
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
            Welcome to Shades and Styles by Santabibi <br />
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
      <FeaturedProducts />
      <ProductCollection />
    </>
  );
}
