import Container from "../components/layouts/Container";

export default function ContactPage() {
  return (
    <div className="pt-[6.5em]">
      <Container>
        <div className="my-10 sm:w-2/3 sm:mx-auto">
          <p className="font-bold text-3xl pb-5">Get in Touch</p>
          <form className="text-sm grid gap-3">
            <div className="grid gap-1">
              <label htmlFor="" className="font-semibold text-gray-600">
                Name
              </label>
              <input
                type="text"
                name=""
                id=""
                className="border border-gray-300 p-2.5 placeholder:font-semibold rounded-sm"
                placeholder="Enter your name..."
              />
            </div>
            <div className="grid gap-1">
              <label htmlFor="" className="font-semibold text-gray-600">
                Email
              </label>
              <input
                type="email"
                name=""
                id=""
                className="border border-gray-300 p-2.5 placeholder:font-semibold rounded-sm"
                placeholder="Enter your email..."
              />
            </div>
            <div className="grid gap-1">
              <label htmlFor="" className="font-semibold text-gray-600">
                Message
              </label>
              <textarea
                name=""
                id=""
                className="border border-gray-300 resize-none p-2.5 w-full placeholder:font-semibold h-[8em] rounded-sm"
                placeholder="Type your message..."
              ></textarea>
            </div>
            <div className="mt-2">
              <button className="font-semibold  text-white bg-[#ff6600] p-2.5 px-3.5 cursor-pointer rounded-sm">
                Send
              </button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}
