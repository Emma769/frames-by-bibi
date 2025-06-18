import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BaseLayout from "./components/layouts/BaseLayout";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}
