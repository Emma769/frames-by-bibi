import { Link } from "react-router-dom";
import Container from "./layouts/Container";

export default function ProductCollection() {
    return (
      <div className="py-8 bg-[hsl(24,100%,75%)] min-h-fit">
        <CrossAnimation />
        <Container>
          <div className="flex w-full flex-col sm:flex-row h-full px-5 py-16 gap-5">
            <Link
              to="/"
              className="block w-full h-[25em] sm:h-[28em] md:h-[32em] relative after:content-[''] after:absolute after:bg-[rgba(255,102,0,.1)] after:inset-0"
            >
              <img
                src="/toa-heftiba-GnkfcQxuj7A-unsplash.jpg"
                alt=""
                className="block w-full h-full object-cover"
              />
              <p className="absolute text-nowrap top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 font-[bebas] bg-[hsl(24,100%,97%)] text-[#ff6600] font-bold text-2xl p-2 tracking-wide -rotate-3">
                shop baby items
              </p>
            </Link>
            <Link
              to="/"
              className="block w-full h-[25em] sm:h-[28em] md:h-[32em] relative after:content-[''] after:absolute after:bg-[rgba(255,102,0,.1)] after:inset-0"
            >
              <img
                src="nathan-dumlao-VJHb4QPBgV4-unsplash.jpg"
                alt=""
                className="block w-full h-full object-cover"
              />
              <p className="absolute text-nowrap top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 font-[bebas] bg-[hsl(24,100%,97%)] text-[#ff6600] font-bold text-2xl p-2 tracking-wide -rotate-3">
                shop eyewear
              </p>
            </Link>
          </div>
        </Container>
        <CrossAnimation />
      </div>
    );
  }
  
  function CrossAnimation() {
    return (
      <div className="grid grid-cols-7 px-16">
        {Array.from({ length: 7 }, (_, idx) => {
          return (
            <div key={`cross_${idx}`} className="cross-container">
              <div className="cross">
                <div className="vertical"></div>
                <div className="horizontal"></div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  