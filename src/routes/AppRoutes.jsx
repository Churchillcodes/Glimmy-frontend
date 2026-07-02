import { Routes, Route } from "react-router-dom";
import PublicLayout from "../components/layout/PublicLayout";
import Home from "../pages/public/Home";
import Catalogue from "../pages/public/Catalogue";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/catalogue" element={<Catalogue />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
