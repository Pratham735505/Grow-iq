// pages/Profile.jsx
import Navbar from "../Components/Studentarea/Navbar";
import Footer from "../Components/footer";
import MainBody from "../Components/Studentarea/Mainbody";

export default function Profile() {
  return (
    <div>
      <Navbar />
      <main className="pt-16">
        <MainBody /> {/* handles sub-routes */}
      </main>
      <Footer />
    </div>
  );
}
