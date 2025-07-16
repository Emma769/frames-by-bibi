import Container from "../components/layouts/Container";
import useScrollIntoView from "../hooks/useScrollIntoView";

export default function ContactPage() {
  const topRef = useScrollIntoView<HTMLDivElement>();

  return (
    <>
      <div ref={topRef}></div>
      <div className="pt-[6.5em]">
        <Container>
          <div className="mt-14 sm:w-2/3 sm:mx-auto">
            <p className="font-bold text-3xl pb-5">Get in Touch</p>
            <form className="text-sm grid gap-3">
              <div className="grid gap-1">
                <label
                  htmlFor="id-name"
                  className="font-semibold text-gray-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="id-name"
                  className="border border-gray-300 p-2.5 placeholder:font-semibold rounded-sm focus-within:outline-[hsl(24,100%,88%)]"
                  placeholder="Enter your name..."
                />
              </div>
              <div className="grid gap-1">
                <label
                  htmlFor="id-email"
                  className="font-semibold text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="id-email"
                  className="border border-gray-300 p-2.5 placeholder:font-semibold rounded-sm focus-within:outline-[hsl(24,100%,88%)]"
                  placeholder="Enter your email..."
                />
              </div>
              <div className="grid gap-1">
                <label
                  htmlFor="id-message"
                  className="font-semibold text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="id-message"
                  className="border border-gray-300 resize-none p-2.5 w-full placeholder:font-semibold h-[8em] focus-within:outline-[hsl(24,100%,88%)] rounded-sm"
                  placeholder="Type your message..."
                ></textarea>
              </div>
              <div className="mt-2">
                <button className="font-semibold  text-white bg-[#ff6600] hover:bg-gray-800 transition-colors p-2.5 px-3.5 cursor-pointer rounded-sm focus-within:outline-gray-300">
                  Send
                </button>
              </div>
            </form>
          </div>
        </Container>
      </div>
    </>
  );
}
