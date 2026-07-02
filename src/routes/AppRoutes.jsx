import { Routes, Route } from "react-router-dom";
import PublicLayout from "../components/layout/PublicLayout";
import Home from "../pages/public/Home";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
