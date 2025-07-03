import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="min-h-[200dvh]">
      <section className="h-[calc(100dvh-6.5em)] bg-[url('/lensabl-LEtgz-OS5uU-unsplash.jpg')] bg-no-repeat bg-center bg-fixed bg-cover relative grid place-content-center after:absolute after:content-[''] after:inset-0 after:bg-[rgba(255,102,0,.2)]">
        <Link
          to="/catalog"
          className="text-center text-4xl text-[#fff] relative z-[1]"
        >
          <span className="font-[bebas]">new in</span>
          <br />
          <span className="font-[seaweed] text-3xl sm:text-5xl lg:text-7xl font-semibold drop-shadow-2xl">
            shop the collection
          </span>
        </Link>
      </section>
    </div>
  );
}
