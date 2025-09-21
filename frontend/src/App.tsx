import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/navbar";
import Body from "./pages/body";
import Footer from "./Components/footer";
export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-16">
          <Body />
        </main>
        <Footer />
      </div>
    </Router>
  );
}
