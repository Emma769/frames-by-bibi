import { Routes, Route } from "react-router-dom";
import BaseLayout from "./components/layouts/BaseLayout";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import CatalogPage from "./pages/CatalogPage";
import CartPage from "./pages/CartPage";

export default function App() {
  return (
    <Routes>
      <Route element={<BaseLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Route>
    </Routes>
  );
}
