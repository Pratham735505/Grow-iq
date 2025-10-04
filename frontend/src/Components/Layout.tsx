// Components/Layout.jsx
import Navbar from "./navbar";
import Footer from "./footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        <Outlet />  {/* All children will render here */}
      </main>
      <Footer />
    </div>
  );
}
