// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Body from "./pages/body";
import Profile from "./pages/Profile";
import NotFound from "./pages/notfound";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Default layout routes */}
        <Route element={<Layout />}>
          <Route path="/*" element={<Body />} />
        </Route>

        {/* Standalone Profile page with its own layout */}
        <Route path="/profile/*" element={<Profile />} />

        {/* Catch-all for wrong routes outside layout */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
