// Components/Studentarea/MainBody.jsx
import { Routes, Route } from "react-router-dom";
import Timetable from "./Timetable";
import Notice from "./Notice";
import Dashboard from "./Dashboard";
import Contact from "../../pages/contacts";
import NotFound from "../../pages/notfound";

export default function MainBody() {
  return (
    <Routes>
      <Route index element={<Dashboard />} />   {/* matches /profile */}
      <Route path="timetable" element={<Timetable />} />  {/* /profile/timetable */}
      <Route path="notices" element={<Notice />} />       {/* /profile/notices */}
      <Route path="contact" element={<Contact />} />      {/* /profile/contact */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
