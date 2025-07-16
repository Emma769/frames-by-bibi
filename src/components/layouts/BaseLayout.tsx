import { Outlet } from "react-router-dom";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";

export default function BaseLayout() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-[100dvh]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
