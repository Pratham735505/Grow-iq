import { Routes, Route } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Services from "./services";
import Contact from "./contacts";
import NotFound from "./notfound";
export default function Body() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
    <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
