import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function PublicLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-glimmy-cream font-body text-glimmy-charcoal">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default PublicLayout;
