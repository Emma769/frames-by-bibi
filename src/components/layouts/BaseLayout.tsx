import { Outlet } from "react-router-dom";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";

export default function BaseLayout() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}
